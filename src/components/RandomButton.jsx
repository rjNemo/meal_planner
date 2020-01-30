import React from "react";
import { Link } from "react-router-dom";

export const RandomButton = ({ url, size, handleClick }) => {
  const classString = `waves-effect waves-light btn-${size}`;
  return (
    <Link to={url}>
      <button
        // className="waves-effect waves-light btn-small"
        className={classString}
        onClick={handleClick}
      >
        Random Recipe
      </button>
    </Link>
  );
};
