import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="brand-logo">
        <span role="img" aria-label="cookie">
          👩‍🍳 Chef's
        </span>
      </Link>
    </div>
  );
};
