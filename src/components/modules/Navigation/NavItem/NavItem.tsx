import * as classNames from 'classnames';
import * as React from 'react';

type ItemProps = React.HTMLAttributes<HTMLDivElement>;

export function NavItem(props: ItemProps): React.ReactElement {
  const { className, children, ...rest } = props;

  return (
    <div className={classNames('mx-4', className)} {...rest}>
      {children}
    </div>
  );
}
