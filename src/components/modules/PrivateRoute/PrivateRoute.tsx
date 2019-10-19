import React from 'react';
import { navigate } from 'gatsby';

import { Auth0Value } from '../../../context/Auth0Context';

interface PrivateRouteProps {
  auth0: Auth0Value;
  component: React.SFC;
  path: string;
}

export function PrivateRoute(
  props: PrivateRouteProps
): React.ReactElement | null {
  const { auth0, component: Component, path, ...rest } = props;

  console.log('auth0', auth0);

  if (!auth0.isAuthenticated) {
    navigate('/');

    return null;
  }
  return <Component {...rest} />;
}
