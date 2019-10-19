import classNames from 'classnames';
import React from 'react';

interface FooterColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
}

export function FooterColumn(props: FooterColumnProps): React.ReactElement {
  const { children, className, header, ...rest } = props;

  return (
    <div className={classNames('w-48', 'text-gray', className)} {...rest}>
      <h4 className="mb-8">{header}</h4>
      {children}
    </div>
  );
}

type FooterColumnItemProps = React.HTMLAttributes<HTMLDivElement>;

export function FooterColumnItem(
  props: FooterColumnItemProps
): React.ReactElement {
  const { children, className, ...rest } = props;

  return (
    <div className={classNames('my-2', 'text-xs', className)} {...rest}>
      {children}
    </div>
  );
}
