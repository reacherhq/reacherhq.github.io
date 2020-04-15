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

import Tooltip from 'rc-tooltip';
import React from 'react';

import { EmailInput } from '../EmailInput';

interface HeroNormalProps {
  onSubmitEmail: (email: string) => void;
}

export function HeroNormal({
  onSubmitEmail,
}: HeroNormalProps): React.ReactElement {
  return (
    <>
      <h1 className="font-big text-5xl leading-tight">
        Find anyone in
        <br />
        full privacy.
      </h1>
      <h2 className="mt-2 mb-12 text-lg">
        Our{' '}
        <strong className="font-normal">
          <span className="text-purple">real-time</span>,{' '}
          <span className="text-yellow">open-source</span> email verification
        </strong>{' '}
        doesn&apos;t collect any data and delivers{' '}
        <Tooltip
          placement="right"
          trigger={['hover']}
          overlay={
            <span>
              It&apos;s 100% accurate because it&apos;s real-time, we check here
              and now.
              <br />
              We proxy the verifications via{' '}
              <a
                className="underline"
                href="https://www.torproject.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Tor
              </a>{' '}
              to avoid being blacklisted.
            </span>
          }
        >
          <span className="dotted-underline">100% correct results</span>
        </Tooltip>
        .
      </h2>
      <EmailInput onSubmitEmail={onSubmitEmail} />
    </>
  );
}
