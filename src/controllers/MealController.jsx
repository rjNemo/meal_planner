import React, { useEffect, useState } from "react";
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

  const favInit = Boolean(localStorage.getItem(strMeal));
  // console.log(favInit);
  const [isFav, setIsFav] = useState(favInit);
  // console.log(isFav);

  useEffect(() => {
    isFav
      ? localStorage.setItem(strMeal, isFav)
      : localStorage.setItem(strMeal, "");
    console.log(localStorage.getItem(strMeal));
    console.log(isFav);
  }, [isFav, strMeal]);

  const item = {
    mealName: strMeal,
    imgAddress: strMealThumb,
    videoAddress: strYoutube,
    mealCategory: strCategory,
    mealArea: strArea,
    isFav: isFav,
    setIsFav: setIsFav
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
