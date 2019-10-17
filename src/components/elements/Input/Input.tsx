import * as classNames from 'classnames';
import * as React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps): React.ReactElement {
  const { className, ...rest } = props;

  return (
    <input className={classNames('border-b pb-1', className)} {...rest}></input>
  );
}
