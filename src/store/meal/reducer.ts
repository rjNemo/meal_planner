import { MealSummary } from "../../types/meal";
import { AppState } from "./index";

export const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "setMeal":
      return { ...state, meals: action.payload };
    case "setSearchResults":
      return {
        ...state,
        search: action.payload.search,
        searchString: action.payload.searchString,
      };
    case "clearSearchResults":
      return { ...state, search: [] as MealSummary[] };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export type Action = {
  payload?: any;
  type: "setMeal" | "setSearchResults" | "clearSearchResults";
};

export type Dispatch = (action: Action) => void;
