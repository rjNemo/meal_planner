import React from "react";
import { Link } from "react-router-dom";

const RandomButton = props => {
  return (
    <Link to={props.url}>
      <button
        className="waves-effect waves-light btn-small"
        onClick={props.handleClick}
      >
        Random Recipe
      </button>
    </Link>
  );
};

export default RandomButton;
