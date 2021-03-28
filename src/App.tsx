import { FC, useState } from "react";
import { PreLoader } from "./components/PreLoader";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import { AppRouter } from "./router";
import { Router } from "./router/Router";
import { getData } from "./services/api";
import { useAuth0 } from "./utils/auth0-spa";

export const App: FC = () => {
  const { loading } = useAuth0();
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState({ meals: [] });
  const [meal, setMeal] = useState(null);
  const buttonUrl = "/random";

  const getRandomMeal = () => {
    getData("random", setMeal);
  };

  const getSearchResults = (e) => {
    searchString === ""
      ? e.preventDefault()
      : getData(searchString, setSearchResults, "search");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  return loading ? (
    <div className="container center-align valign-wrapper">
      <PreLoader />
    </div>
  ) : (
    <Router>
      <MainLayout
        buttonUrl={buttonUrl}
        getRandomMeal={getRandomMeal}
        searchString={searchString}
        setSearchResults={setSearchResults}
        handleChange={handleChange}
        setSearchString={setSearchString}
        getSearchResults={getSearchResults}
      >
        <AppRouter
          buttonUrl={buttonUrl}
          getRandomMeal={getRandomMeal}
          searchString={searchString}
          searchResults={searchResults}
        />
      </MainLayout>
    </Router>
  );
};
