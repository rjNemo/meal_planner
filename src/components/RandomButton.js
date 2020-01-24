import React from "react";
import { Link } from "react-router-dom";

const RandomButton = () => {
  return (
    <Link to="/meal">
      <button class="waves-effect waves-light btn-large">Random Recipe</button>
    </Link>
  );
};

export default RandomButton;
