import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../../services/Firebase";
import { useMeal } from "../../store/meal";
import { fetchMeal, fetchRandomMeal } from "../../store/meal/async";
import { useAuth0 } from "../../utils/auth0-spa";
import { NotFound } from "../NotFound";
import { MealPage } from "./components/MealPage";
import { buildIngredientList, buildMealProps } from "./service";

export const Meal: FC = () => {
  // hooks
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useMeal();
  const fb = useFirebase();
  // local state
  const [isFav, setIsFav] = useState<boolean>();
  // variables
  const mealItem = state.meals?.[0];
  // effects
  /** Fetch meal from db */
  useEffect(() => {
    !id ? fetchRandomMeal(dispatch) : fetchMeal(dispatch, id);
  }, [id, dispatch]);

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

  return !!state.meals ? (
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
