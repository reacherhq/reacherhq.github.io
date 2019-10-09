import * as React from 'react';

import { NavItem } from '../NavItem';

export function Left(): React.ReactElement {
  return (
    <div>
      <span>R</span>
      <NavItem text="Service" />
      <NavItem text="Our Values" />
      <NavItem text="What We Check" />
    </div>
  );
}
