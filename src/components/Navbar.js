import React from "react";
import Logo from "./Logo";

import RandomButton from "./RandomButton";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="row">
          <Logo />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <RandomButton
                handleClick={props.handleClick}
                url={props.buttonUrl}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
