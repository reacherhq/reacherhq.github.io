// Reacher
// Copyright (C) 2018-2020 Amaury Martiny

// Reacher is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Reacher is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Reacher.  If not, see <http://www.gnu.org/licenses/>.

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
          'Content-Type': 'application/json'
        },
        method: 'POST'
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
