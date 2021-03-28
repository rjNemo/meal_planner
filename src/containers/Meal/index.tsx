import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound";
import { useFirebase } from "../../services/Firebase";
import { useAuth0 } from "../../utils/auth0-spa";
import { MealPage } from "./components/MealPage";
import { getMeal, getRandomMeal } from "./service";

export const Meal: FC = () => {
  // hooks
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams();
  const fb = useFirebase();
  // local state
  const [meal, setMeal] = useState(null);
  const [isFav, setIsFav] = useState<boolean>();
  // variables
  const mealItem = meal?.meals?.[0];
  // effects
  /** Fetch meal from db */
  useEffect(() => {
    !id ? getRandomMeal(setMeal) : getMeal(id, setMeal);
  }, [id]);
  /** Updates fav status in db */
  useEffect(() => {
    if (isAuthenticated) {
      fb.isFav(user.email, mealItem?.idMeal).then((res) => setIsFav(res));
    }
  }, [user, fb, mealItem?.idMeal, isAuthenticated]);
  // other logic
  const handleFavChange = () => {
    if (isAuthenticated) {
      setIsFav(!isFav);
      // Send !isFav because state is not yet updated
      fb.addToFavs(
        user?.email,
        mealItem?.idMeal,
        mealItem?.strMeal,
        mealItem?.strMealThumb,
        !isFav
      );
    } else {
      window.alert("You must be authenticated to add to favourites.");
    }
  };

  const item = {
    mealName: mealItem?.strMeal,
    imgAddress: mealItem?.strMealThumb,
    videoAddress: mealItem?.strYoutube,
    mealCategory: mealItem?.strCategory,
    mealArea: mealItem?.strArea,
    isFav,
  };

  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    let strIng = `strIngredient${i}`;
    let strMes = `strMeasure${i}`;
    if (!!mealItem?.[strIng] && !!mealItem?.[strIng]) {
      ingredients.push([mealItem?.[strIng], mealItem?.[strMes]]);
    }
  }

  return !!meal?.meals ? (
    <MealPage
      meal={item}
      ingredients={ingredients}
      recipe={mealItem?.strInstructions}
      handleFavChange={handleFavChange}
    />
  ) : (
    <NotFound handleClick={getRandomMeal} />
  );
};
