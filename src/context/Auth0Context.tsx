import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppState = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Auth0User = any;

const DEFAULT_REDIRECT_CALLBACK = (appState: AppState): void => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export interface Auth0Value {
  isAuthenticated: boolean;
  user: Auth0User;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: (params?: PopupLoginOptions) => Promise<void>;
  handleRedirectCallback: () => Promise<void>;
  getIdTokenClaims: (options?: getIdTokenClaimsOptions) => Promise<IdToken>;
  loginWithRedirect: (options?: GetTokenSilentlyOptions) => Promise<void>;
  getTokenSilently: (options?: GetTokenSilentlyOptions) => Promise<void>;
  getTokenWithPopup: (
    options?: GetTokenWithPopupOptions,
    config?: PopupConfigOptions
  ) => Promise<string>;
  logout: (options?: LogoutOptions) => void;
}

const Auth0Context = React.createContext({} as Auth0Value);

export const useAuth0 = (): Auth0Value => useContext(Auth0Context);

interface Auth0ProviderProps extends Auth0ClientOptions {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRedirectCallback: (appState: AppState) => void;
}

export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}: Auth0ProviderProps): React.ReactElement => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Auth0User>();
  const [auth0Client, setAuth0] = useState<Auth0Client>();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async (): Promise<void> => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };

    initAuth0();
  }, []);

  const loginWithPopup = async (
    options?: PopupLoginOptions,
    config?: PopupConfigOptions
  ): Promise<void> => {
    if (!auth0Client) {
      throw new Error(
        'Calling this function only after auth0Client is set. qed.'
      );
    }

    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(options, config);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async (): Promise<void> => {
    if (!auth0Client) {
      throw new Error(
        'Calling this function only after auth0Client is set. qed.'
      );
    }

    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (
          options?: getIdTokenClaimsOptions
        ): Promise<IdToken> => {
          if (!auth0Client) {
            throw new Error(
              'Calling this function only after auth0Client is set. qed.'
            );
          }

          return auth0Client.getIdTokenClaims(options);
        },
        loginWithRedirect: (options?: RedirectLoginOptions): Promise<void> => {
          if (!auth0Client) {
            throw new Error(
              'Calling this function only after auth0Client is set. qed.'
            );
          }

          return auth0Client.loginWithRedirect(options);
        },
        getTokenSilently: (
          options?: GetTokenSilentlyOptions
        ): Promise<void> => {
          if (!auth0Client) {
            throw new Error(
              'Calling this function only after auth0Client is set. qed.'
            );
          }

          return auth0Client.getTokenSilently(options);
        },
        getTokenWithPopup: (
          options?: GetTokenWithPopupOptions,
          config?: PopupConfigOptions
        ): Promise<string> => {
          if (!auth0Client) {
            throw new Error(
              'Calling this function only after auth0Client is set. qed.'
            );
          }

          return auth0Client.getTokenWithPopup(options, config);
        },
        logout: (options?: LogoutOptions): void => {
          if (!auth0Client) {
            throw new Error(
              'Calling this function only after auth0Client is set. qed.'
            );
          }

          return auth0Client.logout(options);
        }
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
