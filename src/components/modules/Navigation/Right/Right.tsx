import * as React from 'react';

import { Button } from '../../../elements/Button';
import { NavItem } from '../NavItem';

export function Right(): React.ReactElement {
  return (
    <div>
      <NavItem text="Price" />
      <NavItem text="Sign In" />
      <Button>Try for free</Button>
    </div>
  );
}
