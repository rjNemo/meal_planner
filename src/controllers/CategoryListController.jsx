import React, { useEffect, useState } from "react";
import { getData } from "../utils/methods";
import { CategoryListPage } from "../pages/CategoryListPage";
import { PreLoader } from "../components/PreLoader";

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
