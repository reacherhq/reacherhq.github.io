import * as React from 'react';

import { Footer, Navigation, Seo } from '../components';

export default function Index(): React.ReactElement {
  return (
    <>
      <Seo />
      <Navigation />
      <section className="container m-auto mt-24"></section>
      <Footer />
    </>
  );
}
