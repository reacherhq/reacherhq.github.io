import * as React from 'react';

import { Footer, Navigation, Seo } from '../components';
import { useAuth0 } from '../context/Auth0Context';

export default function Index(): React.ReactElement {
  const auth0 = useAuth0();

  return (
    <>
      <Seo />
      <Navigation auth0={auth0} />
      <section className="container m-auto mt-24"></section>
      <Footer />
    </>
  );
}
