import { Link } from 'gatsby';
import React from 'react';

import { Auth0Value } from '../../../../context/Auth0Context';
import { Button, Line, NavItem } from '../../../elements';
import { Profile } from '../../Profile';

interface NavigationProps {
  auth0: Auth0Value;
}

export function Navigation(props: NavigationProps): React.ReactElement {
  const { auth0 } = props;
  const { isAuthenticated } = auth0;

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
        <NavItem>
          <Profile auth0={auth0} />
        </NavItem>
        {isAuthenticated ? (
          <Link to="/dashboard/bulk">
            <Button className="w-48">Go to Dashboard</Button>
          </Link>
        ) : (
          <Button className="w-48">Try for free</Button>
        )}
      </div>
    </div>
  );
}
