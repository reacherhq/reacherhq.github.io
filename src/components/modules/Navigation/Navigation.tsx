// Reacher
// Copyright (C) 2018-2020 Amaury Martiny

// Reacher is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Reacher is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Reacher.  If not, see <http://www.gnu.org/licenses/>.

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
        <Link className="font-big text-4xl" to="/">
          Reacher
        </Link>
        <sup className="mr-4 pb-4 text-xs">beta</sup>
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
