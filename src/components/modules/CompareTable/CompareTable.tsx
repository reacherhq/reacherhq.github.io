import * as classNames from 'classnames';
import * as React from 'react';
import { Check as CheckIcon, HelpCircle, X as XIcon } from 'react-feather';

import emaillistverifyImage from '../../../assets/images/competitors/emaillistverify-logo-black.png';
import thecheckerImage from '../../../assets/images/competitors/thechecker-logo.png';
import xverifyImage from '../../../assets/images/competitors/xverify.png';
import zerobounceImage from '../../../assets/images/competitors/zerobounce.png';
import { Card } from '../../views';
import styles from './CompareTable.module.css';

export type CompareTableProps = React.HTMLAttributes<HTMLTableElement>;

interface Checks {
  catchAll: boolean;
  disposable: boolean;
  honeypot: boolean;
  mx: boolean;
  price10k: string;
  price100k: string;
  syntax: boolean;
  turnaround100k: string;
}

interface EmailService {
  checks: Checks;
  image: string;
  name: string;
}

const checksDescriptions: Record<keyof Checks, string> = {
  catchAll: 'Catch-All',
  disposable: 'Disposable Email',
  honeypot: 'Honeypot',
  mx: 'Domain/MX Record Check',
  price10k: 'Price 10k',
  price100k: 'Price 100k',
  syntax: 'Email Address Syntax Check',
  turnaround100k: 'Turnaround Time for 100k'
};

const data: EmailService[] = [
  {
    checks: {
      catchAll: true,
      disposable: true,
      honeypot: false,
      mx: true,
      price10k: '$10',
      price100k: '$100',
      syntax: true,
      turnaround100k: '2h'
    },
    image: xverifyImage, // Dummy image
    name: 'reacher'
  },
  {
    checks: {
      catchAll: true,
      disposable: true,
      honeypot: false,
      mx: true,
      price10k: '$10',
      price100k: '$100',
      syntax: true,
      turnaround100k: '2h'
    },
    image: xverifyImage,
    name: 'xverify'
  },
  {
    checks: {
      catchAll: true,
      disposable: true,
      honeypot: false,
      mx: true,
      price10k: '$10',
      price100k: '$100',
      syntax: true,
      turnaround100k: '2h'
    },
    image: emaillistverifyImage,
    name: 'emaillistverify'
  },
  {
    checks: {
      catchAll: true,
      disposable: true,
      honeypot: false,
      mx: true,
      price10k: '$10',
      price100k: '$100',
      syntax: true,
      turnaround100k: '2h'
    },
    image: thecheckerImage,
    name: 'thechecker'
  },
  {
    checks: {
      catchAll: true,
      disposable: true,
      honeypot: false,
      mx: true,
      price10k: '$10',
      price100k: '$100',
      syntax: true,
      turnaround100k: '2h'
    },
    image: zerobounceImage,
    name: 'zerobounce'
  }
];

function showCellContent(
  content: string | boolean
): string | React.ReactElement {
  return typeof content === 'string' ? (
    content
  ) : content ? (
    <CheckIcon className="inline text-green" />
  ) : (
    <XIcon className="inline" />
  );
}

export function CompareTable(props: CompareTableProps): React.ReactElement {
  return (
    <div className="relative mx-auto">
      <table className="text-sm">
        <thead>
          <tr className="h-20">
            <th className={styles.firstColumn}></th>
            {data.map(service => (
              <th
                className={classNames(styles.serviceColumn)}
                key={`${service.name}-header`}
              >
                {service.name !== 'reacher' && (
                  <img
                    alt={service.name}
                    className={classNames(styles.grayscale, 'mx-auto', 'w-1/2')}
                    src={service.image}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {([
            'syntax',
            'mx',
            'disposable',
            'honeypot',
            'catchAll',
            'turnaround100k',
            'price10k',
            'price100k'
          ] as (keyof Checks)[]).map(check => (
            <tr
              className="border-t border-lightgray first:border-t-0 h-16"
              key={check}
            >
              <td className="opacity-75 font-normal uppercase">
                <div className="flex flex-row items-center">
                  <HelpCircle className="mr-4" size={16} />
                  <div>{checksDescriptions[check]}</div>
                </div>
              </td>
              {data.map(service => (
                <td
                  className="justify-center text-center z-20"
                  key={`${service.name}-${check}`}
                >
                  {showCellContent(service.checks[check])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Card
        className={classNames(
          'absolute top-0 z-10',
          '-mt-4 py-4',
          'bg-white',
          styles.marginFirstColumn,
          styles.serviceColumn
        )}
      >
        <div className="h-20 flex items-center justify-center font-big text-xl uppercase">
          Reacher
        </div>
        {([
          'syntax',
          'mx',
          'disposable',
          'honeypot',
          'catchAll',
          'turnaround100k',
          'price10k',
          'price100k'
        ] as (keyof Checks)[]).map(check => (
          <div
            className={classNames(
              'h-16',
              'flex items-center justify-center',
              data[0].checks[check] !== false && 'text-green'
            )}
            key={`reacher-${check}`}
          >
            {showCellContent(data[0].checks[check])}
          </div>
        ))}
      </Card>
    </div>
  );
}
