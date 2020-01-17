import classNames from 'classnames';
import React from 'react';

import emailLineImage from '../../../assets/images/email_line.svg';
import styles from './EmailLine.module.css';

export type EmailLineProps = React.HTMLAttributes<HTMLImageElement>;

export function EmailLine(props: EmailLineProps): React.ReactElement {
  const { className, ...rest } = props;

  return (
    <img
      alt="emailLine"
      className={classNames('absolute', 'w-1/2', styles.line, className)}
      {...rest}
      src={emailLineImage}
    ></img>
  );
}
