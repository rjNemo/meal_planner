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
    <div className="container">
      <MealPresentation meal={item} />
      <div className="row">
        <div className="col s6">
          <IngredientList ingredients={ingredientList} />
        </div>
        {/* <p>
        {meal["strIngredient9"]}: {meal["strMeasure9"]}
      </p> */}
        <div className="col s6">
          <Recipe recipe={strInstructions} />
        </div>
      </div>
    </div>
  );
};
export default MealPage;
