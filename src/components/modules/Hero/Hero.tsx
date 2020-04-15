import classNames from 'classnames';
import React, { useState } from 'react';

import { Card, CardProps } from '../../views';
import { EmailResult, HeroChecking } from './Checking';
import styles from './Hero.module.css';
import { HeroNormal } from './Normal';

type HeroProps = CardProps;

const BACKEND_URL = 'https://reacher.fly.dev/check_email';

export function Hero(props: HeroProps): React.ReactElement {
  const { className, ...rest } = props;
  const [email, setEmail] = useState<string>();
  const [result, setResult] = useState<EmailResult>();

  async function handleSubmitEmail(email?: string): Promise<void> {
    setEmail(email);

    if (!email) {
      return;
    }

    setResult(undefined);

    try {
      const response = await fetch(BACKEND_URL, {
        // eslint-disable-next-line @typescript-eslint/camelcase
        body: JSON.stringify({ to_email: email }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      setResult({ ok: await response.json() });
    } catch (error) {
      setResult({ error: error.toString() });
    }
  }

  return (
    <Card className={classNames(styles.hero, 'p-16', className)} {...rest}>
      {email ? (
        <HeroChecking
          email={email}
          onSubmitEmail={handleSubmitEmail}
          result={result}
        />
      ) : (
        <HeroNormal onSubmitEmail={handleSubmitEmail} />
      )}
    </Card>
  );
}
