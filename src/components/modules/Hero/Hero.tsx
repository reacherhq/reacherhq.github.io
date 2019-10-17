import * as classNames from 'classnames';
import * as React from 'react';
import { useState } from 'react';

import { Card, CardProps } from '../../views';
import styles from './Hero.module.css';
import { EmailResult, HeroChecking } from './Checking';
import { HeroNormal } from './Normal';

type HeroProps = CardProps;

export function Hero(props: HeroProps): React.ReactElement {
  const { className, ...rest } = props;
  const [email, setEmail] = useState<string>();
  const [result, setResult] = useState<EmailResult>();

  async function handleSubmitEmail(email?: string): Promise<void> {
    setEmail(email);

    if (!email) {
      return;
    }

    try {
      const response = await fetch(
        `https://y78n51qcpj.execute-api.us-east-1.amazonaws.com/dev?to_email=${email}`
      );
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
