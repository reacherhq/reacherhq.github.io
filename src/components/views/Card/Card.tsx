import * as React from 'react';

import styles from './Card.module.css';

type CardSize = 'small' | 'medium' | number;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  button?: React.ReactElement;
  description?: string | React.ReactElement;
  header?: string | React.ReactElement;
  image?: string;
  size?: CardSize;
}

function getPadding(size?: CardSize): string {
  switch (size) {
    case 'small':
      return 'p-12';
    case 'medium':
      return 'px-16 py-16';
    default:
      return '';
  }
}

function getSpacingBetween(size?: CardSize): string {
  switch (size) {
    case 'small':
      return 'mt-8';
    case 'medium':
      return 'mt-10';
    default:
      return '';
  }
}

export function Card(props: CardProps): React.ReactElement {
  const {
    button,
    children,
    className,
    description,
    header,
    image,
    size,
    ...rest
  } = props;
  return (
    <div
      className={`${className} rounded-xl shadow-2xl  ${getPadding(size)}`}
      {...rest}
    >
      {header && <h3 className="text-center text-xl">{header}</h3>}
      {image && (
        <img
          alt={image}
          className={`m-auto ${styles.imageMedium} w-auto ${getSpacingBetween(
            size
          )}`}
          src={image}
        />
      )}
      {description && (
        <p className={`text-center text-sm ${getSpacingBetween(size)}`}>
          {description}
        </p>
      )}
      {button && (
        <div className={`w-full flex flex-col ${getSpacingBetween(size)}`}>
          {button}
        </div>
      )}
      {children}
    </div>
  );
}
