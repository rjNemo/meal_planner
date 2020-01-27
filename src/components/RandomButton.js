import React from "react";
import { Link } from "react-router-dom";

const RandomButton = props => {
  const classString = `waves-effect waves-light btn-${props.size}`;
  return (
    <Link to={props.url}>
      <button
        // className="waves-effect waves-light btn-small"
        className={classString}
        onClick={props.handleClick}
      >
        Random Recipe
      </button>
    </Link>
  );
};

export default RandomButton;
