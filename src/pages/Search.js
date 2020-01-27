import React from "react";
import SearchResult from "../components/SearchResult";

const SearchPage = props => {
  const { meals } = props.searchResults;
  const { searchString } = props;

  return (
    <div className="container">
      <h1>Search Results for: {searchString} </h1>
      {meals.map((meal, i) => (
        <SearchResult i={i} meal={meal} />
      ))}
    </div>
  );
};
export default SearchPage;
