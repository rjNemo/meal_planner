import React, { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import CardEntry from "../components/CardEntry";

const CategoryPage = props => {
  const [meals, setMeals] = useState({ meals: [] });
  const { getData } = props;
  const { strCategory } = useParams();

  const getMeals = () => {
    getData(strCategory, setMeals, "filter");
  };

  useEffect(() => {
    getMeals();
  }, []);

  const { url } = useRouteMatch();

  return (
    <div className="container">
      <h1>Chef's {strCategory} Recipes</h1>

      <ul>
        {meals.meals.map((meal, i) => (
          <li key={i}>
            {/* <CardEntry item={meal} /> */}
            <Link to={`/${meal.idMeal}`}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card ">
                    <div className="card-image">
                      <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                    <div class="card-content">
                      <h4>{meal.strMeal}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryPage;
