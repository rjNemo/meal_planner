import { getData } from "../../services/api";

export const getMeal = (id, setMeal) => {
  getData(id, setMeal, "lookup");
};

export const getRandomMeal = (setMeal) => {
  getData("random", setMeal);
};
