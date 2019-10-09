import * as React from 'react';

import { Button, Line } from '../../elements';
import { NavItem } from './NavItem';

export function Navigation(): React.ReactElement {
  return (
    <div className="px-12 py-3 flex flex-row justify-between">
      <div className="flex">
        <div className="my-auto mr-4 font-big text-4xl">R</div>
        <NavItem>Services</NavItem>
        <NavItem>Our Values</NavItem>
        <NavItem>What We Check</NavItem>
      </div>
      <div className="flex">
        <NavItem>Price</NavItem>
        <Line className="h-6 my-auto" />
        <NavItem>Sign In</NavItem>
        <Button className="my-auto w-48">Try for free</Button>
      </div>
    </div>
  );
}
