import { FC, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getData } from "../../services/api";
import { CategoryPage } from "./components/CategoryPage";

export const Category: FC = () => {
  const { strCategory } = useParams<{ strCategory: string }>();
  const [meals, setMeals] = useState({ meals: [] });

  useEffect(() => {
    const getMeals = () => getData(strCategory, "filter");
    getMeals().then((data) => setMeals(data));
  }, [strCategory]);

  return !meals.meals ? (
    <Redirect to="/404" />
  ) : (
    <CategoryPage meals={meals} strCategory={strCategory} />
  );
};
