import React from "react";
import { SearchResult } from "../components/SearchResult";

export const SearchPage = props => {
  let { meals } = props.searchResults;
  const { searchString } = props;
  if (meals === null) {
    meals = [];
  }

  return (
    <div className="container">
      <h1>Search Results for: {searchString} </h1>
      {meals[0] === undefined ? (
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
        <ul>
          {meals.map((meal, i) => (
            <SearchResult key={i} meal={meal} />
          ))}
        </ul>
      )}
    </div>
  );
};
