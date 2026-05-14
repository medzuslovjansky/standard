import React, { useCallback, useEffect, useRef, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useLocation } from '@docusaurus/router';
import {
  buildIndex,
  findRange,
  getScopeRoot,
  highlightRange,
} from './anchor';
import {
  deleteFeedback,
  hasToken,
  isPending,
  listFeedback,
  setToken,
  submitFeedback,
  updateFeedback,
} from './api';
import { TOKEN_STORAGE_KEY } from './config';
import { captureSelection, type CapturedSelection } from './selection';
import { formatExpiry, parseToken, type TokenParseResult } from './token';
import type { FeedbackItem } from './types';
import styles from './styles.module.css';

type PopoverState = { x: number; y: number; captured: CapturedSelection } | null;
type ModalState =
  | { kind: 'new'; captured: CapturedSelection }
  | { kind: 'edit'; item: FeedbackItem }
  | null;

function statusOf(item: FeedbackItem): 'pending' | 'taken' | 'processed' {
  if (item.processed_at) return 'processed';
  if (item.taken_at && item.taken_at >= Math.floor(Date.now() / 1000) - 300) return 'taken';
  return 'pending';
}

function formatAuthor(handle: string): string {
  const lt = handle.indexOf('<');
  const trimmed = (lt > 0 ? handle.slice(0, lt) : handle).trim();
  return trimmed || handle.trim();
}

export default function FeedbackWidget(): React.ReactElement | null {
  const location = useLocation();
  const [popover, setPopover] = useState<PopoverState>(null);
  const [modal, setModal] = useState<ModalState>(null);
  const overlayMarksRef = useRef<HTMLElement[]>([]);
  const itemsByIdRef = useRef<Map<number, FeedbackItem>>(new Map());

  const clearOverlay = useCallback(() => {
    for (const m of overlayMarksRef.current) {
      const parent = m.parentNode;
      if (!parent) continue;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
    }
    overlayMarksRef.current = [];
  }, []);

  const onMarkClick = useCallback((id: number) => {
    const item = itemsByIdRef.current.get(id);
    if (!item) return;
    setModal({ kind: 'edit', item });
  }, []);

  const renderOverlay = useCallback(async () => {
    clearOverlay();
    const root = getScopeRoot();
    if (!root) return;
    const items = await listFeedback(window.location.href);
    itemsByIdRef.current = new Map(items.map((i) => [i.id, i]));
    if (items.length === 0) return;
    const index = buildIndex(root);
    const newMarks: HTMLElement[] = [];
    for (const item of items) {
      const range = findRange(
        index,
        item.selection_prefix,
        item.selection_content,
        item.selection_suffix,
      );
      if (!range) {
        console.warn('[feedback-widget] could not locate item', item.id, item.selection_content);
        continue;
      }
      const marks = highlightRange(
        range,
        'fw-mark',
        {
          feedbackId: String(item.id),
          fwStatus: statusOf(item),
        },
        (ev) => {
          ev.stopPropagation();
          onMarkClick(item.id);
        },
      );
      for (const m of marks) m.title = item.request;
      newMarks.push(...marks);
    }
    overlayMarksRef.current = newMarks;
  }, [clearOverlay, onMarkClick]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    const timer = window.setTimeout(() => {
      void renderOverlay();
    }, 200);
    return () => {
      window.clearTimeout(timer);
      clearOverlay();
    };
  }, [location.pathname, renderOverlay, clearOverlay]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    const onMouseUp = (ev: MouseEvent) => {
      if ((ev.target as HTMLElement | null)?.closest('[data-fw-ui]')) return;
      window.setTimeout(() => {
        const captured = captureSelection();
        if (!captured) {
          setPopover(null);
          return;
        }
        const r = captured.rect;
        setPopover({
          x: r.left + r.width / 2,
          y: r.top - 8,
          captured,
        });
      }, 0);
    };
    const onSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) setPopover(null);
    };
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('selectionchange', onSelectionChange);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('selectionchange', onSelectionChange);
    };
  }, []);

  const onPopoverClick = useCallback(() => {
    if (!popover) return;
    setModal({ kind: 'new', captured: popover.captured });
    setPopover(null);
    window.getSelection()?.removeAllRanges();
  }, [popover]);

  const onModalClose = useCallback(() => setModal(null), []);
  const onModalChanged = useCallback(() => {
    setModal(null);
    void renderOverlay();
  }, [renderOverlay]);

  if (!ExecutionEnvironment.canUseDOM) return null;

  return (
    <>
      {popover && (
        <div
          data-fw-ui="popover"
          className={styles.popover}
          style={{
            left: `${popover.x}px`,
            top: `${popover.y}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <button
            type="button"
            className={styles.popoverButton}
            onMouseDown={(e) => e.preventDefault()}
            onClick={onPopoverClick}
          >
            💬 Comment
          </button>
        </div>
      )}
      {modal && (
        <FeedbackModal state={modal} onClose={onModalClose} onChanged={onModalChanged} />
      )}
    </>
  );
}

function FeedbackModal({
  state,
  onClose,
  onChanged,
}: {
  state: NonNullable<ModalState>;
  onClose: () => void;
  onChanged: () => void;
}) {
  const isEdit = state.kind === 'edit';
  const item = isEdit ? state.item : null;
  const captured = !isEdit ? state.captured : null;
  const quote = isEdit ? item!.selection_content : captured!.selection_content;
  const status = isEdit ? statusOf(item!) : null;
  const locked = isEdit && !isPending(item!);

  const [request, setRequest] = useState(isEdit ? item!.request : '');
  const [token, setTokenLocal] = useState<string>(
    () => window.localStorage.getItem(TOKEN_STORAGE_KEY) ?? '',
  );
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const tokenResult: TokenParseResult | null = React.useMemo(
    () => (token.length === 0 ? null : parseToken(token)),
    [token],
  );
  const tokenValid = tokenResult?.ok === true;
  const currentHandle = tokenResult?.ok ? tokenResult.payload.handle : null;
  const isAuthor = isEdit ? currentHandle !== null && currentHandle === item!.handle : true;
  const readOnly = isEdit && (locked || !isAuthor);
  const dirty = isEdit ? request !== item!.request : request.trim().length >= 3;

  const onSave = useCallback(
    async (ev: React.FormEvent) => {
      ev.preventDefault();
      setErr(null);
      if (request.trim().length < 3) {
        setErr('Please describe the feedback (≥3 chars).');
        return;
      }
      if (!tokenResult) {
        setErr('Token is required.');
        return;
      }
      if (tokenResult.ok === false) {
        setErr(`Token: ${tokenResult.error}.`);
        return;
      }
      setToken(token);
      setBusy(true);
      try {
        if (isEdit) {
          await updateFeedback(item!.id, request);
        } else {
          await submitFeedback({
            url: window.location.href,
            heading_id: captured!.heading_id,
            selection_content: captured!.selection_content,
            selection_prefix: captured!.selection_prefix,
            selection_suffix: captured!.selection_suffix,
            request,
          });
        }
        onChanged();
      } catch (e) {
        setErr((e as Error).message);
      } finally {
        setBusy(false);
      }
    },
    [isEdit, item, captured, request, token, tokenResult, onChanged],
  );

  const onDelete = useCallback(async () => {
    if (!isEdit) return;
    if (!tokenResult) {
      setErr('Token is required.');
      return;
    }
    if (tokenResult.ok === false) {
      setErr(`Token: ${tokenResult.error}.`);
      return;
    }
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    setToken(token);
    setErr(null);
    setBusy(true);
    try {
      await deleteFeedback(item!.id);
      onChanged();
    } catch (e) {
      setErr((e as Error).message);
      setBusy(false);
    }
  }, [isEdit, item, confirmDelete, token, tokenResult, onChanged]);

  return (
    <div
      data-fw-ui="backdrop"
      className={styles.backdrop}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form className={styles.modal} onSubmit={onSave} data-fw-ui="modal">
        <div className={styles.header}>
          <h3>{isEdit ? `Comment #${item!.id}` : 'Comment on selection'}</h3>
          {status && (
            <span className={`${styles.pill} ${styles[`pill_${status}`]}`}>{status}</span>
          )}
        </div>
        <blockquote className={styles.quote}>{quote}</blockquote>

        <label htmlFor="fw-request">
          {readOnly && isEdit ? `${formatAuthor(item!.handle)} wrote` : 'Your feedback'}
        </label>
        <textarea
          id="fw-request"
          autoFocus={!isEdit}
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="What should change here?"
          required
          minLength={3}
          disabled={readOnly}
        />

        {isEdit && item!.result && (
          <>
            <label>Resolution</label>
            <blockquote className={styles.result}>{item!.result}</blockquote>
          </>
        )}

        {locked && (
          <div className={styles.status}>
            This comment is {status} and can no longer be edited.
          </div>
        )}

        {!readOnly && (
          <>
            <label htmlFor="fw-token">Token</label>
            <input
              id="fw-token"
              type="password"
              value={token}
              onChange={(e) => setTokenLocal(e.target.value)}
              placeholder="FEEDBACK_TOKEN"
              required
              autoComplete="off"
              aria-invalid={tokenResult ? !tokenResult.ok : undefined}
            />
            {tokenResult?.ok && (
              <div className={styles.tokenOk}>
                ✓ {tokenResult.payload.handle} ({tokenResult.payload.scope}) — expires in{' '}
                {formatExpiry(tokenResult.payload.exp)}
              </div>
            )}
            {tokenResult && tokenResult.ok === false && (
              <div className={styles.error}>✗ {tokenResult.error}</div>
            )}
            {!tokenResult && (
              <div className={styles.status}>
                {hasToken() ? 'Token saved in localStorage.' : 'Token will be saved on submit.'}
              </div>
            )}
          </>
        )}

        {err && <div className={styles.error}>{err}</div>}

        <div className={styles.actions}>
          {isEdit && !readOnly && (
            <button
              type="button"
              className={styles.delete}
              onClick={onDelete}
              disabled={busy || !tokenValid}
            >
              {confirmDelete ? 'Click again to confirm' : 'Delete'}
            </button>
          )}
          <span className={styles.spacer} />
          <button type="button" className={styles.cancel} onClick={onClose} disabled={busy}>
            {readOnly ? 'Close' : 'Cancel'}
          </button>
          {!readOnly && (
            <button
              type="submit"
              className={styles.submit}
              disabled={busy || !tokenValid || (isEdit && !dirty)}
            >
              {busy ? 'Sending…' : isEdit ? 'Save' : 'Submit'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
