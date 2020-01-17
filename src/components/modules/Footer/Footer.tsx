import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

import mailboxImage from '../../../assets/images/undraw_mail_box.svg';
import { FooterColumn, FooterColumnItem } from './Column';
import styles from './Footer.module.css';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export function Footer(props: FooterProps): React.ReactElement {
  const { className, ...rest } = props;

  return (
    <footer
      className={classNames('container mx-auto pb-24', 'relative', className)}
      {...rest}
    >
      <div className="flex flex-row justify-between">
        <div>
          <h4 className="uppercase">Reacher</h4>
          <p className="mt-4 w-64 text-xs">
            Reacher is an open-source, accurate, fast and affordable service
            that helps you to get rid of email bounces and increase your ROI.
          </p>
          <p className="mt-4 w-64 text-xs text-lightgray">
            © 2019 REACHER. All Rights Reserved.
          </p>
        </div>
        <img
          alt="mailbox"
          className={classNames(styles.mailbox, 'absolute bottom-0')}
          src={mailboxImage}
        />
        <div className="px-40 w-64"></div>
        <FooterColumn header="Product">
          <Link to="/">
            <FooterColumnItem>Homepage</FooterColumnItem>
          </Link>
        </FooterColumn>
        <FooterColumn header="Company">
          <FooterColumnItem>About Us</FooterColumnItem>
        </FooterColumn>
        <FooterColumn header="Legal">
          <FooterColumnItem>Contact</FooterColumnItem>
        </FooterColumn>
        <FooterColumn header="Help &amp; Contact">
          <FooterColumnItem>
            <a href="mailto:hello@reacher.com">Email Us</a>
          </FooterColumnItem>
        </FooterColumn>
      </div>
    </footer>
  );
}
