import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { buttonURL, links } from "../constants";
import SpecialEventImage from "../images/special_event.svg";
import { FooterLink } from "./FooterLink";
import { RandomButton } from "./RandomButton";

type Props = {
  showNav: boolean;
  closeNavClick: MouseEventHandler;
};

export const SideNav = ({ showNav, closeNavClick }: Props) => {
  let transformStyle = {
    transform: showNav ? "translateX(0%)" : "translateX(-105%)",
    transition: "0.5s",
  };

  return (
    <ul id="slide-out" className="sidenav" style={transformStyle}>
      <li>
        <div className="user-view" style={{ height: "30vh" }}>
          <div className="background">
            <img
              style={{
                position: "fixed" /* Sit on top of the page content */,
                width: "100%" /* Full width (cover the whole page) */,
                height: "30vh" /* Full width (cover the whole page) */,
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 2,
              }}
              src={SpecialEventImage}
              alt="sidenav_background"
            />
          </div>

          <i className="material-icons right" onClick={closeNavClick}>
            close
          </i>
        </div>
      </li>

      <li>
        <RandomButton url={buttonURL} size="small" color="orange darken-2" />
      </li>
      <li>
        <div className="divider" />
      </li>
      <li>
        <Link to="#" className="subheader">
          Navigation
        </Link>
      </li>
      {links.map((link, i) => (
        <FooterLink key={i} link={link} />
      ))}
    </ul>
  );
};
