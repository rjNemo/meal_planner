import React from "react";
import CategoryEntry from "../components/CategoryEntry";

export const CategoryListPage = ({ categories }) => {
  return (
    <div className="container">
      <h1 className="logo">Chef's Categories</h1>
      <ul>
        {categories.map((category, i) => (
          <CategoryEntry key={i} category={category} />
        ))}
      </ul>
    </div>
  );
};
