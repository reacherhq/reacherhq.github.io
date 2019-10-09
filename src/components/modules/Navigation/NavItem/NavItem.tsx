import * as React from 'react';

interface ItemProps {
  text: string;
}

export function NavItem({ text }: ItemProps): React.ReactElement {
  return <span className="mx-6">{text}</span>;
}
