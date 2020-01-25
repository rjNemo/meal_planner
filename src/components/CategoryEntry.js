import React from "react";
import { Link } from "react-router-dom";

const CategoryEntry = props => {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription
  } = props.category;
  const url = `/${strCategory}`;
  return (
    <Link to={url}>
      <div className="row">
        <li key={props.key}>
          <img src={strCategoryThumb} alt={strCategory} />
          <h3>{strCategory}</h3> {strCategoryDescription}
        </li>
      </div>
    </Link>
  );
};

export default CategoryEntry;
