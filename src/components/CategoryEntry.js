import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const CategoryEntry = props => {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription
  } = props.category;

  const { url } = useRouteMatch();

  return (
    <div className="row">
      <Link to={`${url}/${strCategory}`}>
        <li>
          <img src={strCategoryThumb} alt={strCategory} />
          <h3>{strCategory}</h3> {strCategoryDescription}
        </li>
      </Link>
    </div>
  );
};

export default CategoryEntry;
