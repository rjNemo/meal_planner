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

  // Please improve this code …
  let ingredientList = [];
  var i;
  for (i = 1; i <= 20; i++) {
    var strIng = `strIngredient${i}`;
    var strMes = `strMeasure${i}`;
    ingredientList.push([meal[strIng], meal[strMes]]);
  }

  return (
    <div>
      <MealPresentation meal={item} />
      <IngredientList ingredients={ingredientList} />
      {/* <p>
        {meal["strIngredient9"]}: {meal["strMeasure9"]}
      </p> */}
      <Recipe recipe={strInstructions} />
    </div>
  );
};
export default MealPage;
