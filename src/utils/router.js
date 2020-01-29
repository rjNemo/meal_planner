import React, { useMemo, useEffect } from "react";
import {
  Router as RouterOriginal,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import queryString from "query-string";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

export const Router = ({ children }) => {
  return (
    <RouterOriginal history={history}>
      <ScrollToTop />
      {children}
    </RouterOriginal>
  );
};

export const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params
      },
      match,
      location,
      history
    };
  }, [params, match, location, history]);
};
