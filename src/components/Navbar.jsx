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
  return (
    <div className="row">
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
          </div>
        </div>
      </nav>

      {/* <ul id="slide-out" class="sidenav show-on-small">
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
