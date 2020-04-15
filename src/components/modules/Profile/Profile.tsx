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
