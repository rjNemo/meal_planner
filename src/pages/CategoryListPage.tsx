import React from "react";
import PageLayout from "../layouts/PageLayout";
import CategoryEntry from "../components/CategoryEntry";

export const CategoryListPage = ({ categories }) => {
  return (
    <PageLayout title="Chef's Categories">
      <ul>
        {categories.map((category, i) => (
          <CategoryEntry key={i} category={category} />
        ))}
      </ul>
    </PageLayout>
  );
};
