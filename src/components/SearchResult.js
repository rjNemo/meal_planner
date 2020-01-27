import React from "react";
import { Link } from "react-router-dom";

const SearchResult = props => {
  const { meal } = props;
  const { idMeal, strMeal, strMealThumb } = meal;

  return (
    <div className="row">
      <Link to={`${idMeal}`}>
        <li key={props.i}>
          <img src={strMealThumb} alt={strMeal} />
          <h3>{strMeal}</h3>
        </li>
      </Link>
    </div>
  );
};

export default SearchResult;
