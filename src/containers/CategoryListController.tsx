import React, { useEffect, useState } from "react";
import { PreLoader } from "../components/PreLoader";
import { CategoryListPage } from "../pages/CategoryListPage";
import { getData } from "../services/api";

export const CategoryListController = () => {
  const [categories, setCategories] = useState({ categories: [] });

  const getCategories = () => {
    getData("categories", setCategories);
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  return categories.categories.length === 0 ? (
    <PreLoader />
  ) : (
    <CategoryListPage categories={categories.categories} />
  );
};
