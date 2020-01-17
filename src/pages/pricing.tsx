import React from 'react';

import { Footer, Navigation, Seo } from '../components';
import { Auth0Value } from '../context/Auth0Context';

export default function Index(): React.ReactElement {
  // TODO Unimplemented for now, mocking auth0 object
  const auth0 = { isAuthenticated: false } as Auth0Value;

  return (
    <>
      <Seo />
      <Navigation auth0={auth0} />
      <section className="container m-auto mt-24"></section>
      <Footer />
    </>
  );
}
