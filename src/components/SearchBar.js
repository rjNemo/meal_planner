import React from "react";
import { Link } from "react-router-dom";

export const SearchBar = props => {
  return (
    <div className="container">
      <div className="row center-align">
        <form>
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
        </form>
      </div>
    </div>
  );
};
