import { Link } from 'gatsby';
import * as React from 'react';

import { Auth0Value } from '../../../../context/Auth0Context';
import { NavItem } from '../../../elements';
import { Profile } from '../../../modules';

interface DashNavigationProps {
  auth0: Auth0Value;
}

export function DashNavigation(props: DashNavigationProps): React.ReactElement {
  const { auth0 } = props;

  return (
    <div className="px-12 py-3 flex flex-row justify-between">
      <div className="flex items-center">
        <div className="mr-4 font-big text-4xl">
          R<span className="font-serif">DASH</span>
        </div>
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/pricing">
          <NavItem>Pricing</NavItem>
        </Link>
      </div>
      <div className="flex items-center">
        <Profile auth0={auth0} />
      </div>
    </div>
  );
}
