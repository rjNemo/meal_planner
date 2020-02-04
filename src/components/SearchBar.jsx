import React from "react";
import { Link } from "react-router-dom";

export const SearchBar = props => {
  return (
    <div className="container">
      <div className=" nav-wrapper">
        <div className="row center-align">
          <form>
            <div className="input-field col s10">
              <input
                className=""
                id="search"
                type="search"
                required
                name="search"
                value={props.searchString}
                placeholder="Search for a recipe"
                onChange={props.handleChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
            <Link to="/search">
              <button
                className="btn-floating waves-effect waves-light"
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
    </div>
  );
};
