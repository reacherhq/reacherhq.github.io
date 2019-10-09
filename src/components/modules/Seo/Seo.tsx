import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface SeoProps {
  subtitle?: string;
}

export function Seo(props: SeoProps): React.ReactElement {
  const { subtitle } = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reacher{subtitle ? `- ${subtitle}` : ''}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,900,&amp;display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
