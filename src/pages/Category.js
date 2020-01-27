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
              {/* <Link to="/"> */}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryPage;
