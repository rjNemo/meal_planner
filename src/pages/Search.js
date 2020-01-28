import React from "react";
import SearchResult from "../components/SearchResult";

const SearchPage = props => {
  let { meals } = props.searchResults;
  const { searchString } = props;
  if (meals === null) {
    meals = [];
  }

  return (
    <div className="container">
      <h1>Search Results for: {searchString} </h1>
      {meals[0] === undefined ? (
        <p> Nothing ! Create a component to illustrate emptiness</p>
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
export default SearchPage;
