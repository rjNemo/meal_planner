import { Redirect, Route, Switch } from "react-router-dom";
import { buttonURL } from "../constants";
import { Categories } from "../containers/Categories";
import { Category } from "../containers/Category";
import { Home } from "../containers/Home";
import { Meal } from "../containers/Meal";
import { Profile } from "../containers/Profile";
import { Search } from "../containers/Search";
import { ContactPage } from "../pages/Contact";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivateRoute } from "./PrivateRoute";

//TODO: remove state from router move to containers

const AppRouter = ({ getRandomMeal, searchString, searchResults }) => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <PrivateRoute exact path="/profile" component={Profile} />

    <Route exact path={buttonURL}>
      <Meal />
    </Route>

    <Route exact path="/categories">
      <Categories />
    </Route>

    <Route path="/categories/:strCategory/">
      <Category />
    </Route>

    <Route exact path="/search">
      <Search searchString={searchString} searchResults={searchResults} />
    </Route>

    <Route path="/contact">
      <ContactPage />
    </Route>

    <Route path="/404">
      <NotFoundPage handleClick={getRandomMeal} />
    </Route>

    <Route path="/:id">
      <Meal />
    </Route>

    <Route path="*">
      <Redirect to="/404" />
    </Route>
  </Switch>
);

export default AppRouter;
