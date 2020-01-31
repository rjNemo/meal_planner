// adapted from: https://auth0.com/docs/quickstart/spa/react
import React, { useContext, useState, useEffect } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({
  children,
  onRedirectCallBack = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popUpOpen, setPopUpOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallBack(appState);
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
    // eslint-disable-next-line
  }, []);

  const loginWithPopUp = async (params = {}) => {
    setPopUpOpen(true);
    try {
      await auth0Client.loginWithPopUp(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopUpOpen(false);
    }
    const user = auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = auth0Client.getUser();
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
        popUpOpen,
        loginWithPopUp,
        handleRedirectCallback,
        getIdTokenClaims: (...props) => auth0Client.getIdTokenClaims(...props),
        loginWithRedirect: (...props) =>
          auth0Client.loginWithRedirect(...props),
        getTokenWithPopUp: (...props) =>
          auth0Client.getTokenWithPopUp(...props),
        logout: (...props) => auth0Client.logout(...props)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
