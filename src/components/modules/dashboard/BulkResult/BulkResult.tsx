import { useEffect } from 'react';
import * as React from 'react';

import {} from '../../../elements';

export function BulkResult(): React.ReactElement {
  const { getTokenSilently } = { getTokenSilently: () => {} };

  useEffect(() => {
    async function makeApiCall(): Promise<void> {
      try {
        const token = await getTokenSilently();
        console.log(token);

        const response = await window.fetch(
          `${process.env.GATSBY_BACKEND_URL}/api/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const responseData = await response.json();

        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    makeApiCall();
  }, []);

  return <></>;
}
