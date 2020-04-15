import React from "react";
import { SearchResult } from "../components/SearchResult";
import PageLayout from "../layouts/PageLayout";

export const SearchPage = ({ searchString, searchResults }) => {
  const { meals } = searchResults;
  return (
    <PageLayout title={`Results for: ${searchString}`}>
      {meals === null ? (
        <div className="center-align">
          <p>
            No results to display, instead there is a picture of my breakfast.
          </p>
          <img
            src={require("../images/breakfast.svg")}
            alt="Nothing here!"
            width="70%"
          />
        </div>
      ) : (
        <div className="row">
          <ul>
            {meals.map((meal, i) => (
              <SearchResult key={i} meal={meal} />
            ))}
          </ul>
        </div>
      )}
    </PageLayout>
  );
};
