import classNames from 'classnames';
import React from 'react';

import styles from './Card.module.css';
import { CardContent, CardContentSize } from './Content';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CardContentSize;
}

export function Card(props: CardProps): React.ReactElement {
  const { children, className, size, ...rest } = props;
  return (
    <div
      className={classNames(
        'rounded-xl shadow-2xl',
        'bg-white',
        styles[`${size}Width`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.Content = CardContent;
