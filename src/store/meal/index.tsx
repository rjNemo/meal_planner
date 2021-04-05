//https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { createContext, FC, useContext, useReducer } from "react";
import { MealApi, MealSummary } from "../../types/meal";
import { appReducer, Dispatch } from "./reducer";

export type AppState = {
  meals: MealApi[];
  search: MealSummary[];
  searchString: string;
};

const initState = {
  meals: [] as MealApi[],
  search: [] as MealSummary[],
  searchString: "",
};

type ContextType = { state: AppState; dispatch: Dispatch } | undefined;

const AppContext = createContext<ContextType>(undefined);

export const useMeal = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useMeal must be used within a AppProvider");
  }
  return context;
};

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
