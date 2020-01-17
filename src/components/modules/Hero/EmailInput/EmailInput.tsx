import classNames from 'classnames';
import React, { useState } from 'react';

import { Button } from '../../../elements';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmitEmail: (email: string) => void;
}

export function EmailInput(props: EmailInputProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, disabled, onSubmitEmail, value, ...rest } = props;
  const [email, setEmail] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    onSubmitEmail && onSubmitEmail(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="
            border border-purple rounded-full
            flex items-center
          "
      >
        <input
          className={classNames(
            className,
            'ml-8 mt-3 mb-3',
            'border-none w-full',
            'bg-white',
            'text-xs',
            'disabled:opacity-75'
          )}
          disabled={disabled}
          onChange={handleChange}
          placeholder="EMAIL"
          value={value || email}
          {...rest}
        ></input>
        <Button disabled={disabled} className="h-full w-64 uppercase" full>
          Test an email
        </Button>
      </div>
    </form>
  );
}
