import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { CategoryPage } from "../pages/CategoryPage";
import { getData } from "../utils/methods";

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
