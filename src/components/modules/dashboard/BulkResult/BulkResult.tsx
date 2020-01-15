import { HistoryLocation } from '@reach/router';
import React, { useEffect } from 'react';

import { Auth0Value } from '../../../../context/Auth0Context';
import {} from '../../../elements';

interface BulkResultProps {
  auth0: Auth0Value;
  location: HistoryLocation;
  path: string;
}

export function BulkResult(props: BulkResultProps): React.ReactElement {
  const { auth0, location } = props;
  const { getTokenSilently } = auth0;

  useEffect(() => {
    if (!location.state || !location.state.emails) {
      history.go(-1);

      return;
    }

    const emails = (location.state.emails as string).split('\n');
    const name = location.state.name || 'My First Bulk';

    async function makeApiCall(): Promise<void> {
      try {
        const token = getTokenSilently();

        console.log({ emails, name });

        const response = await window.fetch(
          `${process.env.GATSBY_BACKEND_URL}/api/verify/bulk`,
          {
            body: JSON.stringify({ emails, name }),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        );

        const responseData = await response.json();

        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    makeApiCall();
  }, [getTokenSilently, location.state]);

  console.log(location);

  return <>BULKRESULT</>;
}
