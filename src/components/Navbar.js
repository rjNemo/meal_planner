import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RandomButton from "./RandomButton";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="row">
          <div className="col s3">
            <Logo />
          </div>
          <div className="col s6">
            <SearchBar
              searchString={props.searchString}
              handleChange={props.handleChange}
            />
          </div>
          <div className="col s3">
            <RandomButton handleClick={props.handleClick} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
