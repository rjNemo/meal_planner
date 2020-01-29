import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
      <Link to="/" className="brand-logo">
        <span role="img" aria-label="cookie">
          👩‍🍳 <span className="logo">Chef's</span>
        </span>
      </Link>
    </div>
  );
};
