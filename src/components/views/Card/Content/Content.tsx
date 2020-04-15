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
      return 'px-6 py-16';
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
      return 'mt-10';
    case 'medium':
    case 'big':
      return 'mt-12';
  }
}

function getTextPadding(size: CardContentSize): string {
  switch (size) {
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
