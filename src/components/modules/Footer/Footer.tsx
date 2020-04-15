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

import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import mailboxImage from '../../../assets/images/undraw_mail_box.svg';
import { FooterColumn, FooterColumnItem } from './Column';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export function Footer(props: FooterProps): React.ReactElement {
  const { className, ...rest } = props;

  return (
    <footer
      className={classNames('container mx-auto', 'relative', className)}
      {...rest}
    >
      <div className="h-64 flex flex-row justify-between items-start">
        <div>
          <h4 className="uppercase">Reacher</h4>
          <p className="mt-4 w-64 text-xs">
            Reacher is an open-source, accurate, private and affordable service
            that helps you to get rid of email bounces and increase your ROI.
          </p>
          <p className="mt-4 w-64 text-xs text-gray">
            © 2019-2020 REACHER. All Rights Reserved.
          </p>
        </div>

        <img alt="mailbox" className="px-24 self-end" src={mailboxImage} />

        <FooterColumn header="Helpful links">
          <Link to="/">
            <FooterColumnItem>Homepage</FooterColumnItem>
            <FooterColumnItem>Pricing</FooterColumnItem>
            <FooterColumnItem>FAQ</FooterColumnItem>
          </Link>
        </FooterColumn>

        <FooterColumn header="Behind the scenes">
          <FooterColumnItem>About Us</FooterColumnItem>
          <FooterColumnItem>
            <a
              href="https://github.com/amaurymartiny/check-if-email-exists"
              rel="noopener noreferrer"
              target="_blank"
            >
              Open-source email verifier
            </a>
          </FooterColumnItem>
          <FooterColumnItem>
            <a
              href="https://github.com/reacherhq"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </FooterColumnItem>
        </FooterColumn>

        <FooterColumn header="Legal Stuff">
          <FooterColumnItem>Terms and conditions</FooterColumnItem>
          <FooterColumnItem>Privacy policy</FooterColumnItem>
        </FooterColumn>

        <FooterColumn header="Help &amp; Contact">
          <FooterColumnItem>
            <a
              onClick={(): void =>
                window.location.replace(
                  // Not sure if that helps from bots scraping JS code to find
                  // email addresses, but worth a try
                  'mailto:' + 'amaury.martiny' + '@' + 'protonmail' + '.com'
                )
              }
            >
              Email us
            </a>
          </FooterColumnItem>
        </FooterColumn>
      </div>
    </footer>
  );
}
