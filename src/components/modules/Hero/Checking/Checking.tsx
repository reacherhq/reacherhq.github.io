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
import React, { useState } from 'react';
import { Check, HelpCircle, X as XIcon } from 'react-feather';

import { EmailInput } from '../EmailInput';

export interface EmailResult {
  error?: string;
  /**
   * The OK response. This is only a subset of what
   * https://github.com/amaurymartiny/check-if-email-exists provides.
   */
  ok?: {
    mx: {
      error?: object;
    };
    smtp: {
      error?: object;
      is_deliverable?: boolean;
    };
    syntax: {
      error?: object;
      valid_format?: boolean;
    };
  };
}

interface HeroCheckingProps {
  email: string;
  onSubmitEmail: (email: string) => void;
  result?: EmailResult;
}

function renderJSON(result: EmailResult): React.ReactElement {
  return (
    <pre className="mt-2 whitespace-pre-wrap text-xs">
      {JSON.stringify(result.ok || result, null, 2)}
    </pre>
  );
}

function renderLoading(email: string): React.ReactElement {
  return (
    <p className="text-center text-xs">
      Checking <code>{email}</code>... This may take up to 30 seconds.
    </p>
  );
}

function renderResultItem(
  description: string,
  isValid: boolean
): React.ReactElement {
  return (
    <div className="mx-12 my-6 border-b border-lightgray flex items-center text-sm">
      <HelpCircle className="mr-2 text-gray" size={14} />
      <span className="text-gray">{description}</span>
      {isValid ? (
        <span className="flex-grow text-right text-green uppercase">Valid</span>
      ) : (
        <span className="flex-grow text-right text-red uppercase">Invalid</span>
      )}
    </div>
  );
}

function renderResult(result: EmailResult): React.ReactElement {
  const isDeliverable = !!result.ok?.smtp.is_deliverable;

  return (
    <>
      <div className="flex items-center">
        <div
          className={classNames(
            'rounded-full',
            'p-2',
            isDeliverable ? 'bg-green' : 'bg-red'
          )}
        >
          {isDeliverable ? (
            <Check color="white" size={28} />
          ) : (
            <XIcon color="white" size={28} />
          )}
        </div>

        <div className="ml-4 uppercase">
          {isDeliverable ? 'Deliverable' : 'Undeliverable'} Email Address
        </div>
      </div>
      {renderResultItem('Address Syntax', !!result.ok?.syntax.valid_format)}
      {renderResultItem('Mail server status', !result.ok?.mx.error)}
      {renderResultItem('Email deliverability', isDeliverable)}
    </>
  );
}

function renderBody(
  email: string,
  result: EmailResult | undefined,
  showJSON: boolean,
  setShowJSON: (show: boolean) => void
): React.ReactElement {
  if (!result) {
    return renderLoading(email);
  }

  const { error } = result;

  if (error) {
    return renderJSON(result);
  }

  if (showJSON) {
    return (
      <>
        <div>
          <a className="text-xs" onClick={(): void => setShowJSON(false)}>
            ← Back
          </a>
        </div>
        {renderJSON(result)}
      </>
    );
  }

  return (
    <>
      {renderResult(result)}
      <a className="text-xs" onClick={(): void => setShowJSON(true)}>
        Show as JSON output (Advanced) →
      </a>
    </>
  );
}

export function HeroChecking(props: HeroCheckingProps): React.ReactElement {
  const { email, onSubmitEmail, result } = props;
  const [showJSON, setShowJSON] = useState(false);

  return (
    <>
      <EmailInput
        buttonText="Test more"
        disabled={!result}
        initialValue={email}
        onSubmitEmail={onSubmitEmail}
      />
      <div className="mt-12 mx-4">
        {renderBody(email, result, showJSON, setShowJSON)}
      </div>
    </>
  );
}
