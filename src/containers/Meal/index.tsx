import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMeal } from "../../store/meal";
import { fetchMeal, fetchRandomMeal } from "../../store/meal/async";
import { NotFound } from "../NotFound";
import { MealPage } from "./components/MealPage";
import { buildIngredientList, buildMealProps } from "./service";

export const Meal = () => {
  // hooks
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useMeal();
  // variables
  const mealItem = state.meals?.[0];
  // effects
  /** Fetch meal from db */
  useEffect(() => {
    !id ? fetchRandomMeal(dispatch) : fetchMeal(dispatch, id);
  }, [id, dispatch]);

  const item = buildMealProps(mealItem);
  const ingredients = buildIngredientList(mealItem);

  return !!state.meals ? (
    <MealPage
      meal={item}
      ingredients={ingredients}
      recipe={mealItem?.strInstructions}
    />
  ) : (
    <NotFound />
  );
};
