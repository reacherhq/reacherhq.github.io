import { Link } from 'gatsby';
import React, { useState } from 'react';

import { Button, Input, Line } from '../../../elements';

interface BulkInputProps {
  path: string;
}

export function BulkInput(_props: BulkInputProps): React.ReactElement {
  const [name, setName] = useState('');
  const [emails, setEmails] = useState('');

  function handleChangeEmails(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setEmails(event.target.value);
  }

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  return (
    <>
      <div className="border-b border-lightgray pb-8 flex flex-row">
        <p>List Name</p>
        <Input
          className="ml-8"
          onChange={handleChangeName}
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
            onChange={handleChangeEmails}
            rows={10}
            value={emails}
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
        <Link state={{ name, emails }} to="/dashboard/bulk/new">
          <Button className="w-48 uppercase" full>
            Upload
          </Button>
        </Link>
      </div>
    </>
  );
}
