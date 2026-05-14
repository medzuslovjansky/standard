export type TokenScope = 'submitter' | 'consumer';

export type TokenPayload = {
  handle: string;
  scope: TokenScope;
  iat: number;
  exp: number;
};

export type TokenParseResult =
  | { ok: true; payload: TokenPayload }
  | { ok: false; error: string };

const B64URL = /^[A-Za-z0-9_-]+$/;

function b64urlDecode(s: string): Uint8Array {
  if (!B64URL.test(s)) throw new Error('not base64url');
  const pad = s.length % 4 ? '='.repeat(4 - (s.length % 4)) : '';
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/') + pad;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function isPositiveInt(n: unknown): n is number {
  return typeof n === 'number' && Number.isInteger(n) && n > 0;
}

export function parseToken(raw: string): TokenParseResult {
  const s = raw.trim();
  if (!s) return { ok: false, error: 'empty' };

  const dot = s.indexOf('.');
  if (dot < 1 || dot === s.length - 1) {
    return { ok: false, error: 'expected <payload>.<signature>' };
  }
  const [payloadB64, sigB64] = [s.slice(0, dot), s.slice(dot + 1)];
  if (!B64URL.test(payloadB64) || !B64URL.test(sigB64)) {
    return { ok: false, error: 'parts are not base64url' };
  }

  let json: unknown;
  try {
    const bytes = b64urlDecode(payloadB64);
    json = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return { ok: false, error: 'payload is not valid JSON' };
  }

  if (!json || typeof json !== 'object') {
    return { ok: false, error: 'payload is not an object' };
  }
  const p = json as Record<string, unknown>;

  if (typeof p.handle !== 'string' || p.handle.length < 1 || p.handle.length > 64) {
    return { ok: false, error: 'handle: expected non-empty string ≤64 chars' };
  }
  if (p.scope !== 'submitter' && p.scope !== 'consumer') {
    return { ok: false, error: 'scope: expected "submitter" or "consumer"' };
  }
  if (!isPositiveInt(p.iat)) {
    return { ok: false, error: 'iat: expected positive integer' };
  }
  if (!isPositiveInt(p.exp)) {
    return { ok: false, error: 'exp: expected positive integer' };
  }

  const now = Math.floor(Date.now() / 1000);
  if (p.exp <= now) return { ok: false, error: 'expired' };
  if (p.iat > now + 60) return { ok: false, error: 'iat is in the future' };

  return {
    ok: true,
    payload: {
      handle: p.handle,
      scope: p.scope,
      iat: p.iat,
      exp: p.exp,
    },
  };
}

export function formatExpiry(exp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const delta = exp - now;
  if (delta <= 0) return 'expired';
  const day = 86400;
  if (delta < day) return `${Math.round(delta / 3600)}h`;
  if (delta < 30 * day) return `${Math.round(delta / day)}d`;
  if (delta < 365 * day) return `${Math.round(delta / (30 * day))}mo`;
  return `${(delta / (365 * day)).toFixed(1)}y`;
}
