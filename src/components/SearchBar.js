import React from "react";
import { Link } from "react-router-dom";

const SearchBar = props => {
  return (
    <div className="row">
      <input
        className="input-field col s10"
        type="text"
        name="search"
        value={props.searchString}
        placeholder="Search a recipe"
        onChange={props.handleChange}
      />
      <Link to="/search">
        <button
          className="btn-floating waves-effect waves-light  right  "
          type="submit"
          name="searchButton"
          value="Search"
          onClick={props.onSubmit}
        >
          <i className="material-icons right">send</i>
        </button>
      </Link>
    </div>
  );
};
export default SearchBar;
