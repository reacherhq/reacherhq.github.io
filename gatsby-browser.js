import React from 'react';
import { Auth0Provider } from './src/context/Auth0Context';
import './src/styles/global.css';

// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={process.env.GATSBY_AUTH0_DOMAIN}
    client_id={process.env.GATSBY_AUTH0_CLIENT_ID}
    redirect_uri={window.location.origin}
  >
    {element}
  </Auth0Provider>
);
