import React from "react";
import { SearchResult } from "../components/SearchResult";

export const SearchPage = ({ searchString, searchResults }) => {
  const { meals } = searchResults;
  return (
    <div className="container">
      <h1 className="logo">Results for: {searchString}</h1>
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
          <p></p>
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
    </div>
  );
};
