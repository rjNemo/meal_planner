import React from "react";
import { Link } from "react-router-dom";

const RandomButton = props => {
  return (
    <Link to="/meal">
      <button
        class="waves-effect waves-light btn-large"
        onClick={props.handleClick}
      >
        Random Recipe
      </button>
    </Link>
  );
};

export default RandomButton;
