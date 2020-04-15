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

import React from 'react';

import { Auth0User, Auth0Value } from '../../../context/Auth0Context';

interface UserDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Auth0User;
}

function UserDropdown(props: UserDropdownProps): React.ReactElement {
  const { user, ...rest } = props;

  return (
    <div className="flex flex-row items-center" {...rest}>
      Hi, {user.name}!
      <img
        alt={user.name}
        className="ml-2 rounded-full w-8"
        src={user.picture}
      ></img>
    </div>
  );
}

export interface ProfileProps {
  auth0: Auth0Value;
}

export function Profile(props: ProfileProps): React.ReactElement {
  const {
    auth0: { loading, loginWithRedirect, logout, user },
  } = props;

  return (
    <>
      {user ? (
        <UserDropdown user={user} onClick={(): void => logout()} />
      ) : loading ? (
        'Loading'
      ) : (
        <a onClick={(): Promise<void> => loginWithRedirect()}>Sign In</a>
      )}
    </>
  );
}
