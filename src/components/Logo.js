import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" class="brand-logo">
      <span role="img" aria-label="cookie">
        🍪
      </span>
    </Link>
  );
};

export default Logo;
