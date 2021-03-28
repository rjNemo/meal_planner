import React from "react";
import { Link } from "react-router-dom";

export const CardEntry = ({ item, className = "col s12 m6" }) => {
  const { idMeal, strMeal, strMealThumb } = item;
  return (
    <Link to={`${idMeal}`}>
      <li>
        <div className={className}>
          <div className="card hoverable">
            <div className="card-image">
              <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
              <h4>{strMeal}</h4>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
