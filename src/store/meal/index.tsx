//https://kentcdodds.com/blog/how-to-use-react-context-effectively

import { createContext, FC, useContext, useReducer } from "react";
import { MealApi } from "../../types/meal";
import { appReducer, Dispatch } from "./reducer";

export type AppState = { meals: MealApi[] };
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
  const [state, dispatch] = useReducer(appReducer, { meals: [] as MealApi[] });
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
