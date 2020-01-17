import { Link } from 'gatsby';
import React from 'react';

import { Auth0Value } from '../../../context/Auth0Context';
import { Button, NavItem } from '../../elements';

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
        <Link to="/#services">
          <NavItem>Services</NavItem>
        </Link>
        <Link to="/#values">
          <NavItem>Our Values</NavItem>
        </Link>
        <Link to="/#what-we-check">
          <NavItem>What We Check</NavItem>
        </Link>
      </div>
      <div className="flex items-center">
        {isAuthenticated ? (
          <Link to="/dashboard/bulk">
            <Button className="px-12">Go to Dashboard</Button>
          </Link>
        ) : (
          <a
            href="https://mailchi.mp/12f6e32e376d/reacher"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="px-12">Try for free</Button>
          </a>
        )}
      </div>
    </div>
  );
}
