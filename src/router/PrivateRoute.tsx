import { FC, useEffect } from "react";
import { Route, RouteProps } from "react-router-dom";
import { useAuth0 } from "../utils/auth0-spa";

type Props = { component: FC } & RouteProps;

export const PrivateRoute = ({ component: Component, path, ...rest }: Props) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    // catches infinite loading when no user is logged in
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () =>
      await loginWithRedirect({
        appState: { targetUrl: path },
      });
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = (props: any) => (isAuthenticated ? <Component {...props} /> : null);

  return <Route path={path} render={render} {...rest} />;
};
