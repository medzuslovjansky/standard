import { getFeedbackBaseUrl, TOKEN_STORAGE_KEY } from './config';
import type { FeedbackItem, FeedbackSubmission } from './types';

function getToken(): string {
  if (typeof window === 'undefined') return '';
  return window.localStorage.getItem(TOKEN_STORAGE_KEY) ?? '';
}

export function hasToken(): boolean {
  return getToken().length > 0;
}

export function setToken(token: string): void {
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function isPending(i: FeedbackItem): boolean {
  if (i.processed_at) return false;
  const now = Math.floor(Date.now() / 1000);
  return i.taken_at == null || i.taken_at < now - 300;
}

async function authedFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getToken();
  return fetch(`${getFeedbackBaseUrl()}${path}`, {
    ...init,
    headers: {
      ...init.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
}

async function mutatingFetch(path: string, init: RequestInit): Promise<Response> {
  if (!getToken()) throw new Error('FEEDBACK_TOKEN is empty');
  return authedFetch(path, init);
}

function friendlyError(res: Response, action: string): Error {
  if (res.status === 401) return new Error('Token rejected — ask for a fresh one.');
  if (res.status === 403) return new Error('Token does not have permission for this.');
  if (res.status === 409) return new Error(`Cannot ${action} — already taken or processed.`);
  if (res.status === 404) return new Error('Not found.');
  return new Error(`${action} failed: ${res.status}`);
}

export async function submitFeedback(s: FeedbackSubmission): Promise<FeedbackItem> {
  const res = await mutatingFetch('/feedback', {
    method: 'POST',
    body: JSON.stringify(s),
  });
  if (!res.ok) throw friendlyError(res, 'submit');
  const { id } = (await res.json()) as { id: number };
  return getFeedback(id);
}

export async function listFeedback(url: string): Promise<FeedbackItem[]> {
  try {
    const res = await authedFetch(`/feedback?url=${encodeURIComponent(url)}`);
    if (!res.ok) {
      if (res.status !== 401) {
        console.warn('[feedback-widget] list failed:', res.status);
      }
      return [];
    }
    return (await res.json()) as FeedbackItem[];
  } catch (e) {
    console.warn('[feedback-widget] list error:', e);
    return [];
  }
}

export async function getFeedback(id: number): Promise<FeedbackItem> {
  const res = await authedFetch(`/feedback/${id}`);
  if (!res.ok) throw friendlyError(res, 'load');
  return (await res.json()) as FeedbackItem;
}

export async function updateFeedback(id: number, request: string): Promise<FeedbackItem> {
  const res = await mutatingFetch(`/feedback/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ request }),
  });
  if (!res.ok) throw friendlyError(res, 'edit');
  return getFeedback(id);
}

export async function deleteFeedback(id: number): Promise<void> {
  const res = await mutatingFetch(`/feedback/${id}`, { method: 'DELETE' });
  if (!res.ok) throw friendlyError(res, 'delete');
}
