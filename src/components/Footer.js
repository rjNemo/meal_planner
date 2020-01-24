import React from "react";
import CopyrightText from "./CopyrightText";
import GitHubLink from "./GitHubLink";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="footer-copyright">
        <div class="container">
          <CopyrightText />
          <GitHubLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
