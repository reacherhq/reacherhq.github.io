import React from 'react';

import { EmailInput } from '../EmailInput';

interface HeroNormalProps {
  onSubmitEmail: (email: string) => void;
}

export function HeroNormal({
  onSubmitEmail,
}: HeroNormalProps): React.ReactElement {
  return (
    <>
      <h1 className="font-big text-5xl leading-tight">
        Find anyone in
        <br />
        full privacy.
      </h1>
      <h2 className="mt-2 mb-12 text-lg">
        Our{' '}
        <strong className="font-normal">
          <span className="text-purple">real-time</span>,{' '}
          <span className="text-yellow">open-source</span> email verification
        </strong>{' '}
        doesn&apos;t collect any data and delivers 100% correct results.
      </h2>
      <EmailInput onSubmitEmail={onSubmitEmail} />
    </>
  );
}
