import * as React from 'react';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export function Footer(props: FooterProps): React.ReactElement {
  const { ...rest } = props;

  return <footer {...rest}>Footer</footer>;
}
