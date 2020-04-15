import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";

export const CategoryPage = ({ meals, strCategory }) => {
  return (
    <PageLayout title={`Chef's ${strCategory} Recipes`}>
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
    </PageLayout>
  );
};
