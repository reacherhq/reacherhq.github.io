import * as React from 'react';

import { Card } from '../../views';

type HeroProps = React.HTMLAttributes<HTMLDivElement>;

export function Hero(props: HeroProps): React.ReactElement {
  const { ...rest } = props;

  return (
    <div className="container m-auto" {...rest}>
      <Card className="p-24 w-800">
        <h1 className="text-6xl">
          Find anyone
          <br />
          in full privacy
        </h1>
        <p>
          Our <span className="text-purple">real-time</span>,{' '}
          <span className="text-yellow">open-source</span> email verification
          doesn&apos;t collect any data and delivers 100% correct results.
        </p>
        <form>
          <input placeholder="EMAIL"></input>
        </form>
      </Card>
    </div>
  );
}
