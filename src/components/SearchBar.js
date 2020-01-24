import React from "react";

const SearchBar = props => {
  return (
    <input
      type="text"
      name="search"
      value={props.searchString}
      placeholder="Search a recipe"
      onChange={props.handleChange}
      //{onSubmit={props.handleSubmit}
    />
  );
};
export default SearchBar;
