import { useEffect, useState } from "react";
import { PreLoader } from "../../components/PreLoader";
import { getData } from "../../services/api";
import { CategoriesPage } from "./components/CategoriesPage";

export const Categories = () => {
  const [categories, setCategories] = useState({ categories: [] });

  const getCategories = () => {
    getData("categories", setCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories.categories.length === 0 ? (
    <PreLoader />
  ) : (
    <CategoriesPage categories={categories.categories} />
  );
};
