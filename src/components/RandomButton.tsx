import React from "react";
import { Link } from "react-router-dom";

export const RandomButton = ({ url, size = "large", handleClick, color }) => {
  const classString = `waves-effect waves-light btn-${size} ${color}`;
  return (
    <Link to={url}>
      <button className={classString} onClick={handleClick}>
        Random Recipe
      </button>
    </Link>
  );
};
