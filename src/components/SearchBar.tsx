import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { getData } from "../services/api";

export const SearchBar = ({
  searchString,
  setSearchString,
  setSearchResults,
}) => {
  const getSearchResults = (e) => {
    searchString === ""
      ? e.preventDefault()
      : getData(searchString, setSearchResults, "search");
  };

  const clearSearchBar = () => {
    setSearchString("");
    setSearchResults({ meals: [] });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchString(value);
  };

  return (
    <div className="section">
      <div className="container">
        <div className=" nav-wrapper">
          <div className="row center-align">
            <form>
              <div className="input-field col s10">
                <input
                  className="validate"
                  id="search"
                  type="search"
                  required
                  name="search"
                  value={searchString}
                  placeholder="Search for a recipe"
                  onChange={handleChange}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons" onClick={clearSearchBar}>
                  close
                </i>
              </div>
              <div className="col s2 valign-wrapper">
                <Link to="/search">
                  <button
                    className="btn-floating waves-effect waves-light orange lighten-2"
                    type="submit"
                    name="searchButton"
                    value="Search"
                    onClick={getSearchResults}
                  >
                    <i className="material-icons right">send</i>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
