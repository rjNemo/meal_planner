import { AppState } from "./index";

export const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "setMeal":
      return { meals: action.payload };
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

export type Action = {
  payload?: any;
  type: "setMeal" | "fetchMeal" | "fetchRandomMeal" | "toggleFav";
};
export type Dispatch = (action: Action) => void;
