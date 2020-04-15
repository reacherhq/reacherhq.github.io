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
