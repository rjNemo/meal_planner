import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";

export const CategoryPage = props => {
  const [meals, setMeals] = useState({ meals: [] });
  const { getData } = props;
  const { strCategory } = useParams();

  const getMeals = () => {
    getData(strCategory, setMeals, "filter");
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="container">
      <h1 className="logo">Chef's {strCategory} Recipes</h1>
      {meals.meals === null ? (
        <Redirect to="/404" />
      ) : (
        <ul>
          {meals.meals.map((meal, i) => (
            <li key={i}>
              {/* <CardEntry item={meal} /> */}
              <Link to={`/${meal.idMeal}`}>
                <div className="row">
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
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
