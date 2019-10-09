import * as classNames from 'classnames';
import * as React from 'react';

import { CardContent } from './Content';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card(props: CardProps): React.ReactElement {
  const { children, className, ...rest } = props;
  return (
    <div className={classNames('rounded-xl shadow-2xl', className)} {...rest}>
      {children}
    </div>
  );
}

Card.Content = CardContent;
