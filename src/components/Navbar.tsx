import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { buttonURL, links } from "../constants";
import { FooterLink } from "./FooterLink";
import { Logo } from "./Logo";
import { RandomButton } from "./RandomButton";

type Props = { openNavClick: MouseEventHandler };

export const Navbar = ({ openNavClick }: Props) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <div className="container ">
          <Logo />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {links.map((link, i) => (
              <FooterLink key={i} link={link} textColor="black" />
            ))}
            <li>
              <RandomButton
                url={buttonURL}
                size="small"
                color="orange darken-2"
              />
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
