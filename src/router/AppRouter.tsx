import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { buttonURL } from "../constants";
import { Categories } from "../containers/Categories";
import { Category } from "../containers/Category";
import { Contact } from "../containers/Contact";
import { Home } from "../containers/Home";
import { Meal } from "../containers/Meal";
import { NotFound } from "../containers/NotFound";
import { Profile } from "../containers/Profile";
import { Search } from "../containers/Search";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter: FC = () => (
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
      <Search />
    </Route>

    <Route path="/contact">
      <Contact />
    </Route>

    <Route path="/404">
      <NotFound />
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
