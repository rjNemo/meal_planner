import React, { useState } from "react";
import { useAuth0 } from "../utils/auth0-spa";
// import { Logo } from "./Logo";
import { RandomButton } from "./RandomButton";
import { FooterLink } from "./FooterLink";
import { LogInButton } from "./LogInButton";
import { LogOutButton } from "./LogOutButton";

export const SideNav = props => {
  const { showNav, closeNavClick, links } = props;
  const { isAuthenticated } = useAuth0();
  let transformStyle = {
    transform: showNav ? "translateX(0%)" : "translateX(-105%)",
    transition: "0.5s"
  };

  return (
    <>
      <ul id="slide-out" className="sidenav" style={transformStyle}>
        <li>
          <a>
            <i className="material-icons" onClick={closeNavClick}>
              close
            </i>
          </a>
          <div className="user-view">
            <div className="background">
              <img
                // className="responsive-img"
                style={{
                  position: "fixed" /* Sit on top of the page content */,
                  width: "100%" /* Full width (cover the whole page) */,
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  backgroundColor:
                    "rgba(0,0,0,0.5)" /* Black background with opacity */,
                  zIndex:
                    "2" /* Specify a stack order in case you're using a different order for other elements */
                  // cursor: "pointer" /* Add a pointer on hover */
                }}
                src={require("../images/special_event.svg")}
                alt="sidenav_background"
              />
            </div>
            <a href="#user">
              <img
                className="circle"
                src={require("../images/chef.svg")}
                alt="user_avatar"
              />
            </a>
            <a href="#name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>

        <li>
          <a>
            <RandomButton
              handleClick={props.handleClick}
              url={props.buttonUrl}
              size="small"
            />
          </a>
        </li>
        <li>
          <a>{!isAuthenticated ? <LogInButton /> : <LogOutButton />}</a>
        </li>

        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Navigation</a>
        </li>
        {links.map((link, i) => (
          <FooterLink key={i} link={link} />
        ))}
        <li>{isAuthenticated && <FooterLink link="profile" />}</li>
      </ul>
    </>
  );
};
