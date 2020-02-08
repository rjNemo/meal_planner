import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../utils/auth0-spa";
import { RandomButton } from "./RandomButton";
import { FooterLink } from "./FooterLink";
import { LogInButton } from "./LogInButton";
import { LogOutButton } from "./LogOutButton";

export const SideNav = props => {
  const { showNav, closeNavClick, links } = props;
  const { isAuthenticated, user } = useAuth0();
  let transformStyle = {
    transform: showNav ? "translateX(0%)" : "translateX(-105%)",
    transition: "0.5s"
  };

  return (
    <>
      <ul id="slide-out" className="sidenav" style={transformStyle}>
        <li>
          <div className="user-view" style={{ height: "30vh" }}>
            <div className="background">
              <img
                // className="responsive-img"
                style={{
                  position: "fixed" /* Sit on top of the page content */,
                  width: "100%" /* Full width (cover the whole page) */,
                  height: "30vh" /* Full width (cover the whole page) */,
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

            <i className="material-icons right" onClick={closeNavClick}>
              close
            </i>

            {isAuthenticated ? (
              <Link to="/profile">
                <img className="circle" src={user.picture} alt="user_avatar" />
                <span className="white-text name">{user.name}</span>
                <span className="white-text email">{user.email}</span>
              </Link>
            ) : (
              // <Link to="/profile">
              <img
                className="circle"
                src={require("../images/chef.svg")}
                alt="user_avatar"
              />
              // </Link>
            )}
          </div>
        </li>

        <li>
          <RandomButton
            handleClick={props.handleClick}
            url={props.buttonUrl}
            size="small"
            color="orange darken-2"
          />
        </li>
        <li>
          <Link to="#">
            {!isAuthenticated ? (
              <LogInButton color="orange lighten-1" />
            ) : (
              <LogOutButton />
            )}
          </Link>
        </li>

        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link to="#" className="subheader">
            Navigation
          </Link>
        </li>
        {links.map((link, i) => (
          <FooterLink key={i} link={link} />
        ))}
        {isAuthenticated && <FooterLink link="profile" />}
      </ul>
    </>
  );
};
