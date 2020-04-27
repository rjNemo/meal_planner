import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "../utils/auth0-spa";
import { MealPage } from "../pages/MealPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { useFirebase } from "../services/Firebase";

export const MealController = ({ meal, getMeal, getRandomMeal }) => {
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams();
  const fb = useFirebase();

  useEffect(() => {
    id === undefined ? getRandomMeal() : getMeal(id);
    // eslint-disable-next-line
  }, []);

  const mealItem = meal.meals[0];

  const {
    idMeal,
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strArea,
    strInstructions,
  } = mealItem;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // console.log(user.email);
    // console.log(idMeal);
    // console.log(isFav);
    console.log(fb);

    // const add2Fav = async (user, idMeal, isFav) => {
    if (isAuthenticated) {
      fb.add(user.email, idMeal, isFav);
    }
    // };
    // add2Fav(user, idMeal, isFav).then((data) => console.log(data));
  }, [user, idMeal, isFav, fb, isAuthenticated]);

  const item = {
    mealName: strMeal,
    imgAddress: strMealThumb,
    videoAddress: strYoutube,
    mealCategory: strCategory,
    mealArea: strArea,
    isFav: isFav,
    setIsFav: setIsFav,
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
