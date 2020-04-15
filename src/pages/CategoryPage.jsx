import React from "react";
import { Link } from "react-router-dom";

export const CategoryPage = ({ meals, strCategory }) => {
  return (
    <div className="container">
      <h1 className="logo">Chef's {strCategory} Recipes</h1>
      <ul>
        <div className="row">
          {meals.meals.map((meal, i) => (
            <li key={i}>
              {/* <CardEntry item={meal} /> */}
              <Link to={`/${meal.idMeal}`}>
                <div className="col s12 m6">
                  <div className="card hoverable">
                    <div className="card-image">
                      <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                    <div className="card-content">
                      <h4>{meal.strMeal}</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
