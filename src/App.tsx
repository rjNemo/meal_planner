import { FC } from "react";
import { PreLoader } from "./components/PreLoader";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { AppRouter } from "./router";
import { Router } from "./router/Router";
import { useAuth0 } from "./utils/auth0-spa";

export const App: FC = () => {
  const { loading } = useAuth0();

  return loading ? (
    <div className="container center-align valign-wrapper">
      <PreLoader />
    </div>
  ) : (
    <Router>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Router>
  );
};
