import { FC } from "react";
import { links } from "../constants";
import { CopyrightText } from "./CopyrightText";
import { FooterLink } from "./FooterLink";
import { GitHubLink } from "./GitHubLink";

export const Footer: FC = () => {
  const footerLinks = [...links, "random"];
  return (
    <footer className="page-footer">
      <div className="row">
        <div className="container">
          <div className=" s12">
            <h5 className="black-text">Navigation</h5>
            <ul>
              {footerLinks.map((link, i) => (
                <FooterLink key={i} link={link} textColor="black" />
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
