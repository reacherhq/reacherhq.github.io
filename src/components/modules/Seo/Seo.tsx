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

import React from 'react';
import { Helmet } from 'react-helmet';

export interface SeoProps {
  subtitle?: string;
}

export function Seo(props: SeoProps): React.ReactElement {
  const { subtitle } = props;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Reacher
        {subtitle ? `- ${subtitle}` : ' - Real-time private email verification'}
      </title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,900,&amp;display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
