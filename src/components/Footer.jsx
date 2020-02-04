import React from "react";
import { CopyrightText } from "./CopyrightText";
import { GitHubLink } from "./GitHubLink";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  const links = ["categories", "random", "contact"];

  return (
    <footer className="page-footer">
      <div className="row">
        <div className="container">
          <div className=" s12">
            <h5 className="white-text">Navigation</h5>
            <ul>
              {links.map((link, i) => (
                <FooterLink key={i} link={link} textColor="grey" />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <CopyrightText />
          <GitHubLink />
        </div>
      </div>
    </footer>
  );
};
