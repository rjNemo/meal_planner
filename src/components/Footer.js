import React from "react";
import { CopyrightText } from "./CopyrightText";
import { GitHubLink } from "./GitHubLink";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          <CopyrightText />
          <GitHubLink />
        </div>
      </div>
    </footer>
  );
};
