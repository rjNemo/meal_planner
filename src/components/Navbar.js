import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RandomButton from "./RandomButton";

const Navbar = props => {
  return (
    <div className="Navbar">
      <Logo />
      <SearchBar
        searchString={props.searchString}
        handleChange={props.handleChange}
      />
      <RandomButton />
    </div>
  );
};

export default Navbar;
