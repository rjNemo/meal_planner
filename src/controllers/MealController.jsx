import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MealPage } from "../pages/MealPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const MealController = ({ meal, getMeal, getRandomMeal }) => {
  const { idMeal } = useParams();

  useEffect(() => {
    idMeal === undefined ? getRandomMeal() : getMeal(idMeal);
    // eslint-disable-next-line
  }, []);

  const mealItem = meal.meals[0];

  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strArea,
    strInstructions
  } = mealItem;

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
    if (mealItem[strIng] !== "" && mealItem[strIng] !== null) {
      ingredientList.push([mealItem[strIng], mealItem[strMes]]);
    }
  }

  return meal !== undefined && meal.meals !== null ? (
    <MealPage
      item={item}
      ingredientList={ingredientList}
      strInstructions={strInstructions}
    />
  ) : (
    <NotFoundPage handleClick={getRandomMeal} />
  );
};
