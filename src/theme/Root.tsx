import React from 'react';
import FeedbackWidget from '@site/src/components/FeedbackWidget';

export default function Root({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <>
      {children}
      <FeedbackWidget />
    </>
  );
}
