import * as classNames from 'classnames';
import * as React from 'react';

type ItemProps = React.HTMLAttributes<HTMLDivElement>;

export function NavItem(props: ItemProps): React.ReactElement {
  const { className, children } = props;

  return (
    <div className={classNames('mx-4 my-auto', className)}>{children}</div>
  );
}
