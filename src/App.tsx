import { FC, useState } from "react";
import { PreLoader } from "./components/PreLoader";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { AppRouter } from "./router";
import { Router } from "./router/Router";
import { MealSummary } from "./types/meal";
import { useAuth0 } from "./utils/auth0-spa";

export const App: FC = () => {
  const { loading } = useAuth0();
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState({
    meals: [] as MealSummary[],
  });

  return loading ? (
    <div className="container center-align valign-wrapper">
      <PreLoader />
    </div>
  ) : (
    <Router>
      <MainLayout
        searchString={searchString}
        setSearchResults={setSearchResults}
        setSearchString={setSearchString}
      >
        <AppRouter searchString={searchString} searchResults={searchResults} />
      </MainLayout>
    </Router>
  );
};
