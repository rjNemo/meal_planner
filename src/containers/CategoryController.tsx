import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { CategoryPage } from "../pages/CategoryPage";
import { getData } from "../services/api";

export const CategoryController = () => {
  const [meals, setMeals] = useState({ meals: [] });

  const { strCategory } = useParams();

  const getMeals = () => {
    getData(strCategory, setMeals, "filter");
  };

  useEffect(() => {
    getMeals();
    // eslint-disable-next-line
  }, []);

  return meals.meals === null ? (
    <Redirect to="/404" />
  ) : (
    <CategoryPage meals={meals} strCategory={strCategory} />
  );
};
