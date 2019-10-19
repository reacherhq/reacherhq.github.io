import classNames from 'classnames';
import React from 'react';

import styles from './Content.module.css';

export type CardContentSize = 'small' | 'medium' | 'big';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  button?: React.ReactElement;
  description?: string | React.ReactElement;
  header?: string | React.ReactElement;
  image?: string;
  size?: CardContentSize;
}

function getPadding(size?: CardContentSize): string {
  switch (size) {
    case 'small':
      return 'px-8 py-16';
    case 'medium':
    case 'big':
      return 'p-16';
    default:
      return '';
  }
}

function getSpacingBetween(size: CardContentSize): string {
  switch (size) {
    case 'small':
      return 'mt-8';
    case 'medium':
    case 'big':
      return 'mt-10';
  }
}

function getTextPadding(size: CardContentSize): string {
  switch (size) {
    case 'small':
      return 'px-6';
    default:
      return '';
  }
}

export function CardContent(props: CardContentProps): React.ReactElement {
  const {
    button,
    children,
    className,
    description,
    header,
    image,
    size = 'medium',
    ...rest
  } = props;

  return (
    <div className={classNames(getPadding(size), className)} {...rest}>
      {header && <h3 className="text-center text-xl font-medium">{header}</h3>}
      {image && (
        <img
          alt={image}
          className={classNames(
            'm-auto',
            styles[`${size}Image`],
            'w-auto',
            getSpacingBetween(size)
          )}
          src={image}
        />
      )}
      {description && (
        <p
          className={classNames(
            'text-center text-sm',
            getSpacingBetween(size),
            getTextPadding(size)
          )}
        >
          {description}
        </p>
      )}
      {button && (
        <div
          className={classNames(
            'w-full',
            'flex flex-col',
            getSpacingBetween(size)
          )}
        >
          {button}
        </div>
      )}
      {children}
    </div>
  );
}
