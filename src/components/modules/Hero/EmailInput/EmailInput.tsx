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

import { Button } from '../../../elements';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  buttonText?: string;
  initialValue?: string;
  onSubmitEmail: (email: string) => void;
}

export function EmailInput(props: EmailInputProps): React.ReactElement {
  const {
    buttonText = 'Test an email',
    className,
    disabled,
    initialValue = '',
    onSubmitEmail,
    value,
    ...rest
  } = props;
  const [email, setEmail] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    email && onSubmitEmail(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={classNames(
          'border border-purple rounded-full',
          'flex items-center',
          disabled && 'opacity-75'
        )}
      >
        <input
          className={classNames(
            'ml-8 mt-3 mb-3',
            'border-none w-full',
            'bg-white',
            'text-xs',
            className
          )}
          disabled={disabled}
          onChange={handleChange}
          placeholder="EMAIL"
          required
          value={value || email}
          {...rest}
        ></input>
        <Button disabled={disabled} className="h-full w-64 uppercase" full>
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
