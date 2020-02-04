import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth0 } from "../utils/auth0-spa";
// import { Logo } from "./Logo";
// import { RandomButton } from "./RandomButton";
// import { FooterLink } from "./FooterLink";
// import { LogInButton } from "./LogInButton";
// import { LogOutButton } from "./LogOutButton";

export const SideNav = props => {
  const { showNav } = props;

  let transformStyle = {
    transform: showNav ? "translateX(0%)" : "translateX(-105%)"
  };
  // let sideNavStyle = { width: showNav ? "250px" : "0" };

  return (
    <>
      <ul id="slide-out" class="sidenav" style={transformStyle}>
        <li>
          <div class="user-view">
            <div class="background">
              <img src={require("../images/chef.svg")} />
            </div>
            <a href="#user">
              <img class="circle" src={require("../images/chef.svg")} />
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
    </>
  );
};
