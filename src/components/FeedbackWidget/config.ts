const LOCAL_BASE_URL = 'http://localhost:8788';
const PROD_BASE_URL = 'https://feedback-widget-service.noomorph.workers.dev';

export function getFeedbackBaseUrl(): string {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return LOCAL_BASE_URL;
  }
  return PROD_BASE_URL;
}

export const TOKEN_STORAGE_KEY = 'FEEDBACK_TOKEN';

export const PREFIX_SUFFIX_CHARS = 64;
