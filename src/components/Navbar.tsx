import React, { FC } from "react";
import { Link } from "react-router-dom";
import { buttonURL, links } from "../constants";
import { useAuth0 } from "../utils/auth0-spa";
import { FooterLink } from "./FooterLink";
import { LogInButton } from "./LogInButton";
import { Logo } from "./Logo";
import { LogOutButton } from "./LogOutButton";
import { RandomButton } from "./RandomButton";

type Props = { openNavClick: React.MouseEventHandler };

export const Navbar: FC<Props> = ({ openNavClick }) => {
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
                  url={buttonURL}
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
