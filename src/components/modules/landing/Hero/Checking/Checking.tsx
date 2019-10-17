import * as React from 'react';

import { EmailInput } from '../EmailInput';

export interface EmailResult {
  error?: string;
  ok?: object;
}

interface HeroCheckingProps {
  email: string;
  onSubmitEmail: (email: string) => void;
  result?: EmailResult;
}

export function HeroChecking(props: HeroCheckingProps): React.ReactElement {
  const { email, onSubmitEmail, result } = props;

  console.log(result);

  return (
    <>
      <EmailInput
        disabled={!result}
        onSubmitEmail={onSubmitEmail}
        value={email}
      />
      {result && <pre>{JSON.stringify(result)}</pre>}
    </>
  );
}
