import { Action } from "./actions";
import { AppState } from "./index";

export const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "fetchMeal":
      return { meals: state.meals };
    case "fetchRandomMeal":
      return { meals: state.meals };
    case "toggleFav":
      return { meals: state.meals };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
