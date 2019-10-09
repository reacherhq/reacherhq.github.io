import * as React from 'react';

import { Left } from './Left';
import { Right } from './Right';

export function Navigation(): React.ReactElement {
  return (
    <div className="flex flex-row justify-between px-8 py-6">
      <Left />
      <Right />
    </div>
  );
}
