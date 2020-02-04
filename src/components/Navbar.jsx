import React from "react";
import { useAuth0 } from "../utils/auth0-spa";
import { Logo } from "./Logo";
import { RandomButton } from "./RandomButton";
import { FooterLink } from "./FooterLink";
import { LogInButton } from "./LogInButton";
import { LogOutButton } from "./LogOutButton";

export const Navbar = props => {
  const { isAuthenticated } = useAuth0();
  const links = ["categories", "contact"];
  const { openNavClick } = props;
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
              <li>{isAuthenticated && <FooterLink link="profile" />}</li>
              <li>
                <RandomButton
                  handleClick={props.handleClick}
                  url={props.buttonUrl}
                  size="small"
                />
              </li>
              <li>{!isAuthenticated ? <LogInButton /> : <LogOutButton />}</li>
            </ul>
            <a
              href="#"
              data-target="slide-out"
              class="sidenav-trigger "
              onClick={openNavClick}
            >
              <i class="material-icons">menu</i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
