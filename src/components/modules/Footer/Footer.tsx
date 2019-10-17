import * as classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';

import mailboxImage from '../../../assets/images/undraw_mail_box.svg';
import { FooterColumn, FooterColumnItem } from './Column';
import styles from './Footer.module.css';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

export function Footer(props: FooterProps): React.ReactElement {
  const { className, ...rest } = props;

  return (
    <footer
      className={classNames('container mx-auto', 'relative', className)}
      {...rest}
    >
      <img
        alt="mailbox"
        className={classNames(styles.mailbox, 'absolute bottom-0 w-32')}
        src={mailboxImage}
      />
      <div className="flex flex-row justify-between">
        <div className={styles.companyDesc}>
          <h4>Reacher</h4>
          <p>
            Reacher is an open-source, accurate, fast and affordable service
            that helps you to get rid of email bounces and increase your ROI.
          </p>
          <p>© 2019 REACHER. All Rights Reserved.</p>
        </div>
        <FooterColumn header="Product">
          <a onClick={console.log}>
            <FooterColumnItem>Overview</FooterColumnItem>
          </a>

          <Link to="/pricing">
            <FooterColumnItem>Pricing</FooterColumnItem>
          </Link>
        </FooterColumn>
        <FooterColumn header="Company">
          <FooterColumnItem>About Us</FooterColumnItem>
        </FooterColumn>
        <FooterColumn header="Legal">
          <FooterColumnItem>Contact</FooterColumnItem>
        </FooterColumn>
        <FooterColumn header="Help &amp; Contact">
          <FooterColumnItem>Chat with US</FooterColumnItem>
          <FooterColumnItem>Email Us</FooterColumnItem>
        </FooterColumn>
      </div>
    </footer>
  );
}
