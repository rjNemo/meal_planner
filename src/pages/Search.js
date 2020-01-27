import React from "react";
import SearchResult from "../components/SearchResult";

const SearchPage = props => {
  const { meals } = props.searchResults;
  const { searchString } = props;

  return (
    <div className="container">
      <h1>Search Results for: {searchString} </h1>
      <ul>
        {meals.map((meal, i) => (
          <SearchResult key={i} meal={meal} />
        ))}
      </ul>
    </div>
  );
};
export default SearchPage;
