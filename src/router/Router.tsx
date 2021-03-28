import { FC, useEffect } from "react";
import { Router as RouterOriginal, useLocation } from "react-router-dom";
import history from "../utils/history";

export const Router: FC = ({ children }) => (
  <RouterOriginal history={history}>
    <ScrollToTop />
    {children}
  </RouterOriginal>
);

export const ScrollToTop: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};
