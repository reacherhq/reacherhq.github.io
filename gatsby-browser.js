import './src/styles/global.css';

import React from 'react';

import { Auth0Provider } from './src/context/Auth0Context';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    audience={process.env.GATSBY_AUTH0_API_IDENTIFIER}
    client_id={process.env.GATSBY_AUTH0_CLIENT_ID}
    domain={process.env.GATSBY_AUTH0_DOMAIN}
    redirect_uri={window.location.origin}
  >
    {element}
  </Auth0Provider>
);
