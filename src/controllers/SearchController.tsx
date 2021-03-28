import React from "react";
import { SearchPage } from "../pages/SearchPage";

export const SearchController = ({ searchString, searchResults }) => {
  if (searchResults === null) {
    searchResults = { meals: [] };
  }

  return (
    <SearchPage searchString={searchString} searchResults={searchResults} />
  );
};
