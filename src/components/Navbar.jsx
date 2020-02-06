import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../utils/auth0-spa";
import { Logo } from "./Logo";
import { RandomButton } from "./RandomButton";
import { FooterLink } from "./FooterLink";
import { LogInButton } from "./LogInButton";
import { LogOutButton } from "./LogOutButton";

export const Navbar = props => {
  const { isAuthenticated } = useAuth0();

  const { openNavClick, links } = props;
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div className="container ">
            <Logo />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {links.map((link, i) => (
                <FooterLink key={i} link={link} />
              ))}
              {isAuthenticated && <FooterLink link="profile" />}
              <li>
                <RandomButton
                  handleClick={props.handleClick}
                  url={props.buttonUrl}
                  size="small"
                />
              </li>
              <li>{!isAuthenticated ? <LogInButton /> : <LogOutButton />}</li>
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
