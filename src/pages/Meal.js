import React from "react";
import MealPresentation from "../components/MealPresentation";
import IngredientList from "../components/IngredientList";
import Recipe from "../components/Recipe";

const MealPage = props => {
  const meal = props.meal.meals[0];

  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strArea,
    strInstructions
  } = meal;

  const item = {
    mealName: strMeal,
    imgAddress: strMealThumb,
    videoAddress: strYoutube,
    mealCategory: strCategory,
    mealArea: strArea
  };

  let ingredientList = [];
  var i;
  for (i = 1; i <= 20; i++) {
    var strIng = `strIngredient${i}`;
    var strMes = `strMeasure${i}`;
    if (meal[strIng] !== "") {
      ingredientList.push([meal[strIng], meal[strMes]]);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <MealPresentation meal={item} />
        </div>
        <div className="col s6">
          <IngredientList ingredients={ingredientList} />
          <Recipe recipe={strInstructions} />
        </div>
      </div>
    </div>
  );
};
export default MealPage;
