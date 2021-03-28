import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../utils/auth0-spa";
import { Logo } from "./Logo";
import { RandomButton } from "./RandomButton";
import { FooterLink } from "./FooterLink";
import { LogInButton } from "./LogInButton";
import { LogOutButton } from "./LogOutButton";

export const Navbar = ({ openNavClick, links, buttonUrl, handleClick }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div className="container ">
            <Logo />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {links.map((link, i) => (
                <FooterLink key={i} link={link} textColor="black" />
              ))}
              {isAuthenticated && (
                <FooterLink link="profile" textColor="black" />
              )}
              <li>
                <RandomButton
                  handleClick={handleClick}
                  url={buttonUrl}
                  size="small"
                  color="orange darken-2"
                />
              </li>
              <li>
                {!isAuthenticated ? (
                  <LogInButton color="orange lighten-1" />
                ) : (
                  <LogOutButton />
                )}
              </li>
            </ul>
            <Link
              to="#"
              data-target="slide-out"
              className="sidenav-trigger "
              onClick={openNavClick}
            >
              <i className="material-icons">menu</i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
