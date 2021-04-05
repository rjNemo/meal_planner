import { getData } from "../../services/api";
import { Dispatch } from "./reducer";

export const fetchRandomMeal = async (dispatch: Dispatch) => {
  const meal = await getData("random");
  dispatch({ type: "setMeal", payload: meal?.meals });
};

export const fetchMeal = async (dispatch: Dispatch, id: string) => {
  const meal = await getData(id, "lookup");
  dispatch({ type: "setMeal", payload: meal?.meals });
};

export const fetchSearchResults = async (
  dispatch: Dispatch,
  searchString: string
) => {
  const meals = await getData(searchString, "search");
  dispatch({
    type: "setSearchResults",
    payload: { search: meals?.meals, searchString },
  });
};
