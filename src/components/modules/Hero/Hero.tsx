import * as classNames from 'classnames';
import * as React from 'react';

import { Button } from '../../elements';
import { Card, CardProps } from '../../views';
import styles from './Hero.module.css';

type HeroProps = CardProps;

export function Hero(props: HeroProps): React.ReactElement {
  const { className, ...rest } = props;

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <Card className={classNames(className, styles.width, 'p-16')} {...rest}>
      <h1 className="font-big text-5xl leading-tight">
        Find anyone in
        <br />
        full privacy.
      </h1>
      <h2 className="mt-2 text-lg">
        Our{' '}
        <strong className="font-normal">
          <span className="text-purple">real-time</span>,{' '}
          <span className="text-yellow">open-source</span> email verification
        </strong>{' '}
        doesn&apos;t collect any data and delivers 100% correct results.
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          className="
            mt-12
            border border-purple rounded-full
            flex items-center
          "
        >
          <input
            className="ml-8 mt-3 mb-3 border-none w-full appearance-none bg-transparent text-xs"
            placeholder="EMAIL"
          ></input>
          <Button className="h-full w-64 uppercase" full>
            Test an email
          </Button>
        </div>
      </form>
    </Card>
  );
}
