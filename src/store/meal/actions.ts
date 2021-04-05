export type Action = { type: "fetchMeal" | "fetchRandomMeal" | "toggleFav" };
export type Dispatch = (action: Action) => void;
