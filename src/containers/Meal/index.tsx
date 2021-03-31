import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/api";
import { useFirebase } from "../../services/Firebase";
import { MealApi as MealType } from "../../types/meal";
import { useAuth0 } from "../../utils/auth0-spa";
import { NotFound } from "../NotFound";
import { MealPage } from "./components/MealPage";
import { buildIngredientList, buildMealProps } from "./service";

export const Meal: FC = () => {
  // hooks
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams<{ id: string }>();
  const fb = useFirebase();
  // local state
  const [meal, setMeal] = useState({ meals: [] as MealType[] });
  const [isFav, setIsFav] = useState<boolean>();
  // variables
  const mealItem = meal?.meals?.[0];

  const getMeal = (
    id: string,
    setMeal: React.Dispatch<React.SetStateAction<{ meals: MealType[] }>>
  ) => {
    getData(id, setMeal, "lookup");
  };

  const getRandomMeal = (
    setMeal: React.Dispatch<React.SetStateAction<{ meals: MealType[] }>>
  ) => {
    getData("random", setMeal);
  };

  // effects
  /** Fetch meal from db */
  useEffect(() => {
    !id ? getRandomMeal(setMeal) : getMeal(id, setMeal);
  }, [id]);
  /** Updates fav status in db */
  useEffect(() => {
    if (isAuthenticated) {
      fb?.isFav(user.email, mealItem?.idMeal).then((res) => setIsFav(res));
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

  const item = buildMealProps(mealItem, isFav!);
  const ingredients = buildIngredientList(mealItem);

  return !!meal?.meals ? (
    <MealPage
      meal={item}
      ingredients={ingredients}
      recipe={mealItem?.strInstructions}
      handleFavChange={handleFavChange}
    />
  ) : (
    <NotFound />
  );
};
