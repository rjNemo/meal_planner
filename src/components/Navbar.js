import React from "react";
import Logo from "./Logo";

import RandomButton from "./RandomButton";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="row">
      <nav>
        <div className="nav-wrapper">
          <div className="container">
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

      {/* <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="images/office.jpg" />
            </div>
            <a href="#user">
              <img class="circle" src="images/yuna.jpg" />
            </a>
            <a href="#name">
              <span class="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span class="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a class="subheader">Subheader</a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a> */}
    </div>
  );
};

export default Navbar;
