import React from "react";
import { Link } from "react-router-dom";

export const CardEntry = props => {
  const { idMeal, strMeal, strMealThumb } = props.item;
  return (
    <Link to={`${idMeal}`}>
      <li>
        <div className="row">
          <div className="col s12 m6">
            <div className="card ">
              <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
              </div>
              <div className="card-content">
                <h4>{strMeal}</h4>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
