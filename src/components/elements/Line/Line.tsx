import * as classNames from 'classnames';
import * as React from 'react';

type LineProps = React.HTMLAttributes<HTMLDivElement>;

export function Line(props: LineProps): React.ReactElement {
  const { className, ...rest } = props;

  return (
    <div
      className={classNames('border-r border-lightgray', className)}
      {...rest}
    ></div>
  );
}
