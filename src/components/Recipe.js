import React from "react";

const Recipe = props => {
  return (
    <div className="recipe">
      <h2>Instructions</h2>
      <p>{props.recipe}</p>
    </div>
  );
};
export default Recipe;
