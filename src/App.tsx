import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { AppRouter, Router } from "./router";

export const App = () => (
  <Router>
    <MainLayout>
      <AppRouter />
    </MainLayout>
  </Router>
);
