import React, { useEffect, useState } from "react";
import {
  useParams,
  Link,
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";
import MealPage from "./Meal";

const CategoryPage = props => {
  const [meals, setMeals] = useState({ meals: [] });
  const { getFromAPI } = props;
  const { strCategory } = useParams();

  const getMeals = () => {
    getFromAPI(strCategory, setMeals, 0);
  };

  const getMeal = () => {
    // setIsLoading(true);
    getFromAPI("random", props.setMeal);
    // setIsLoading(false);
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
            <Link to={`${url}/${meal.strMeal}`}>
              {/* <Link to="/meal"> */}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </Link>
            <Switch>
              <Route path={`${url}/${meal.strMeal}`}>
                <MealPage meal={meal} getMeal={getMeal} />
              </Route>
            </Switch>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoryPage;
