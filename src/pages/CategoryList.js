import React from "react";
import CategoryEntry from "../components/CategoryEntry";

const CategoryListPage = props => {
  //   const { categories } = props;
  const categories = props.categories.categories;
  //   if (categories.length > 0) {

  //   }
  //   const { strCategory } = categories;
  return (
    <div className="section">
      <div className="container">
        <h1>The Chef's meal categories</h1>
        <ul>
          {categories.map((category, i) => (
            <CategoryEntry key={i} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryListPage;
