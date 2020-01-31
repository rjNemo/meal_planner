import React, { useEffect } from "react";
import CategoryEntry from "../components/CategoryEntry";

export const CategoryListPage = props => {
  const { categories } = props.categories;
  const { getCategories } = props;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="section">
      <div className="container">
        <h1 className="logo">Chef's Categories</h1>
        <ul>
          {categories.map((category, i) => (
            <CategoryEntry key={i} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};
