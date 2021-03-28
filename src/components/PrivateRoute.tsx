import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../utils/auth0-spa";

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      // catches infinite loading when no user is logged in
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};
