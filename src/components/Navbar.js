import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RandomButton from "./RandomButton";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="row">
          {/* <div className="col s9"> */}
          <Logo />
          {/* </div> */}
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/categories" onClick={props.getCategories}>
                Categories
              </Link>
            </li>
            <li>
              <RandomButton handleClick={props.handleClick} />
            </li>
          </ul>
          {/* <div className="col s6">
            <SearchBar
              searchString={props.searchString}
              handleChange={props.handleChange}
            />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
