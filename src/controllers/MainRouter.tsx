import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SearchController } from "./SearchController";
import { HomeController } from "./HomeController";
import { MealController } from "./MealController";
import { CategoryController } from "./CategoryController";
import { CategoryListController } from "./CategoryListController";
import { ProfileController } from "./ProfileController";
import { ContactPage } from "../pages/Contact";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivateRoute } from "../components/PrivateRoute";

const MainRouter = ({
  buttonUrl,
  meal,
  getMeal,
  getRandomMeal,
  searchString,
  searchResults,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeController buttonUrl={buttonUrl} />
      </Route>

      <PrivateRoute exact path="/profile" component={ProfileController} />

      <Route exact path={buttonUrl}>
        <MealController
          meal={meal}
          getMeal={getMeal}
          getRandomMeal={getRandomMeal}
        />
      </Route>

      <Route exact path="/categories">
        <CategoryListController />
      </Route>

      <Route path="/categories/:strCategory/">
        <CategoryController />
      </Route>

      <Route exact path="/search">
        <SearchController
          searchString={searchString}
          searchResults={searchResults}
        />
      </Route>

      <Route path="/contact">
        <ContactPage />
      </Route>

      <Route path="/404">
        <NotFoundPage handleClick={getRandomMeal} />
      </Route>

      <Route path="/:id">
        <MealController
          meal={meal}
          getMeal={getMeal}
          getRandomMeal={getRandomMeal}
        />
      </Route>

      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};

export default MainRouter;
