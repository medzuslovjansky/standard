export type FeedbackSubmission = {
  url: string;
  heading_id?: string | null;
  selection_content: string;
  selection_prefix: string;
  selection_suffix: string;
  request: string;
};

export type FeedbackItem = FeedbackSubmission & {
  id: number;
  handle: string;
  created_at: number;
  taken_at: number | null;
  processed_at: number | null;
  result: string | null;
};
