import {
  buildIndex,
  flatOffsetForPoint,
  findHeadingId,
  getScopeRoot,
  type DocIndex,
} from './anchor';
import { PREFIX_SUFFIX_CHARS } from './config';

export type CapturedSelection = {
  selection_content: string;
  selection_prefix: string;
  selection_suffix: string;
  heading_id: string | null;
  rect: DOMRect;
};

export function captureSelection(): CapturedSelection | null {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;

  const root = getScopeRoot();
  if (!root) return null;

  const range = sel.getRangeAt(0);
  if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) return null;

  const index: DocIndex = buildIndex(root);
  const startFlat = flatOffsetForPoint(index.map, range.startContainer, range.startOffset);
  const endFlat = flatOffsetForPoint(index.map, range.endContainer, range.endOffset);
  if (startFlat == null || endFlat == null || endFlat <= startFlat) return null;

  const content = index.text.slice(startFlat, endFlat);
  if (content.trim().length < 3) return null;

  const prefix = index.text.slice(Math.max(0, startFlat - PREFIX_SUFFIX_CHARS), startFlat);
  const suffix = index.text.slice(endFlat, endFlat + PREFIX_SUFFIX_CHARS);
  const heading_id = findHeadingId(range.startContainer);

  const rect = range.getBoundingClientRect();
  return {
    selection_content: content,
    selection_prefix: prefix,
    selection_suffix: suffix,
    heading_id,
    rect,
  };
}
