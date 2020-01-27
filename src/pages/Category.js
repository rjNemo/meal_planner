import React, { useEffect, useState } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";

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
  //   const {
  //     strCategory,
  //     strCategoryThumb,
  //     strCategoryDescription
  //   } = props.category;

  return (
    <div className="container">
      <h1>Chef's {strCategory} Recipes</h1>
      {/* <img src={strCategoryThumb} alt={strCategory} />
  <p>{strCategoryDescription}</p> */}

      <ul>
        {meals.meals.map((meal, i) => (
          <li key={i}>
            <Link to={`/${meal.idMeal}`}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card ">
                    <div className="card-image">
                      <img src={meal.strMealThumb} alt={meal.strMeal} />
                      <span className="card-title">{meal.strMeal}</span>
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
