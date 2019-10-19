import { useEffect } from 'react';
import * as React from 'react';

import { BulkInput, Card, DashNavigation, Footer, Seo } from '../../components';
import { useAuth0 } from '../../context/Auth0Context';

export default function Bulk(): React.ReactElement {
  const auth0 = useAuth0();

  const { getTokenSilently } = auth0;

  useEffect(() => {
    async function makeApiCall(): Promise<void> {
      try {
        const token = await getTokenSilently();

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

  return (
    <>
      <Seo />
      <DashNavigation auth0={auth0} />
      <section className="container mx-auto mt-4">
        <Card className="mx-auto" size="big">
          <Card.Content size="medium">
            <BulkInput />
          </Card.Content>
        </Card>
      </section>
      <Footer className="mt-64" />
    </>
  );
}
