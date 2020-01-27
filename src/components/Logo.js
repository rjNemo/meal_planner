import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <logo>
      <Link to="/" className="brand-logo">
        <span role="img" aria-label="cookie">
          👩‍🍳 Chef's
        </span>
      </Link>
    </logo>
  );
};

export default Logo;