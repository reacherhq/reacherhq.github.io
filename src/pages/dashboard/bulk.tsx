import { useState } from 'react';
import * as React from 'react';

import {
  Card,
  DashNavigation,
  Footer,
  Input,
  Line,
  Seo,
  Button
} from '../../components';
import { useAuth0 } from '../../context/Auth0Context';

export default function Bulk(): React.ReactElement {
  const auth0 = useAuth0();
  const [name, setName] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  return (
    <>
      <Seo />
      <DashNavigation auth0={auth0} />
      <section className="container mx-auto mt-4">
        <Card className="mx-auto" size="big">
          <Card.Content size="medium">
            <div className="border-b border-lightgray pb-8 flex flex-row">
              <p>List Name</p>
              <Input
                className="ml-8"
                onChange={handleChange}
                placeholder="My first bulk!"
                value={name}
              ></Input>
            </div>
            <div className="mt-8 flex flex-row justify-between">
              <div className="pr-8 flex-grow">
                <p>Enter Your Email Addresses</p>
                <textarea
                  className="mt-8 w-full"
                  placeholder={'hello@reacher.com\nadmin@reacher.com'}
                  rows={10}
                ></textarea>
              </div>
              <div className="mt-16 flex flex-col justify-center items-center">
                <Line className="h-24" />
                <p className="uppercase">OR</p>
                <Line className="h-24" />
              </div>
              <div className="pl-8 flex-grow">
                <p>Enter Your Email Addresses</p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Button className="w-48 uppercase" full>
                Upload
              </Button>
            </div>
          </Card.Content>
        </Card>
      </section>
      <Footer className="mt-64" />
    </>
  );
}
