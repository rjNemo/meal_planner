import { Switch, Route, Redirect } from "react-router-dom";
import { SearchController } from "../containers/SearchController";
import { HomeController } from "../containers/HomeController";
import { MealController } from "../containers/MealController";
import { CategoryController } from "../containers/CategoryController";
import { CategoryListController } from "../containers/CategoryListController";
import { ProfileController } from "../containers/ProfileController";
import { ContactPage } from "../pages/Contact";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivateRoute } from "./PrivateRoute";

//TODO: remove state from router move to containers

const AppRouter = ({
  buttonUrl,
  meal,
  getMeal,
  getRandomMeal,
  searchString,
  searchResults,
}) => (
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

export default AppRouter;
