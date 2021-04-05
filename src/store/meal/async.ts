import { createURI } from "../../services/api";
import { Dispatch } from "./reducer";

export const fetchRandomMeal = async (dispatch: Dispatch) => {
  // const meal = await getData("random")
  //TODO: refactor to use Meal client
  const URI = createURI("random");

  const meal = await fetch(URI)
    .then((response) => response.json())
    .catch((error) => console.warn(error + "url:" + URI));

  dispatch({ type: "setMeal", payload: meal.meals });
};

export const fetchMeal = async (dispatch: Dispatch, id: string) => {
  //TODO: refactor to use Meal client
  const URI = createURI(id, "lookup");

  const meal = await fetch(URI)
    .then((response) => response.json())
    .catch((error) => console.warn(error + "url:" + URI));

  dispatch({ type: "setMeal", payload: meal.meals });
};

export const fetchSearchResults = async (
  dispatch: Dispatch,
  searchString: string
) => {
  //TODO: refactor to use Meal client
  const URI = createURI(searchString, "search");

  const meals = await fetch(URI)
    .then((response) => response.json())
    .catch((error) => console.warn(error + "url:" + URI));

  dispatch({
    type: "setSearchResults",
    payload: { search: meals.meals, searchString },
  });
};
