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

  const [isFav, setIsFav] = useState();

  /**
   * Updates fav status in db
   */
  const handleFavChange = (e) => {
    e.preventDefault();
    setIsFav(!isFav);
    // Send !isFav because state is not yet updated
    fb.addToFavs(user.email, idMeal, strMeal, strMealThumb, !isFav);
  };

  useEffect(() => {
    // Not update fav status of the placeholder recipe. TODO: it's ugly...
    if (idMeal !== "52837" && isAuthenticated) {
      fb.isFav(user.email, idMeal).then((res) => setIsFav(res));
    }
  }, [user, fb, idMeal, isAuthenticated]);

  const item = {
    mealName: strMeal,
    imgAddress: strMealThumb,
    videoAddress: strYoutube,
    mealCategory: strCategory,
    mealArea: strArea,
    isFav,
    handleFavChange,
  };

  let ingredientList = [];
  var i;
  for (i = 1; i <= 20; i++) {
    let strIng = `strIngredient${i}`;
    let strMes = `strMeasure${i}`;
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
