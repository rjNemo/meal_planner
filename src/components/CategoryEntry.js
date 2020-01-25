import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

const CategoryEntry = props => {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription
  } = props.category;

  const { url, path } = useRouteMatch();

  return (
    <div className="row">
      <Link to={`${url}/${strCategory}`}>
        <li key={props.key}>
          <img src={strCategoryThumb} alt={strCategory} />
          <h3>{strCategory}</h3> {strCategoryDescription}
        </li>
      </Link>
    </div>

    // <Switch>
    //   <Route path={`${match.path}/${strCategory}`}>
    //     <h3>Please select a topic.</h3>
    //   </Route>
    // </Switch>
  );
};

export default CategoryEntry;
