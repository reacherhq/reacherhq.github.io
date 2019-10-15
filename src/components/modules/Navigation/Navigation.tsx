import { Link } from 'gatsby';
import * as React from 'react';

import { Button, Line } from '../../elements';
import { NavItem } from './NavItem';

export function Navigation(): React.ReactElement {
  return (
    <div className="px-12 py-3 flex flex-row justify-between">
      <div className="flex items-center">
        <div className="mr-4 font-big text-4xl">R</div>
        <NavItem>Services</NavItem>
        <NavItem>Our Values</NavItem>
        <NavItem>What We Check</NavItem>
      </div>
      <div className="flex items-center">
        <Link to="/pricing">
          <NavItem>Pricing</NavItem>
        </Link>
        <Line className="h-6 my-auto" />
        <NavItem>Sign In</NavItem>
        <Button className="w-48">Try for free</Button>
      </div>
    </div>
  );
}
