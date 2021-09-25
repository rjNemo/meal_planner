import { PreLoader } from "./components/PreLoader";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { AppRouter, Router } from "./router";
import { useAuth0 } from "./utils/auth0-spa";

export const App = () => {
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
