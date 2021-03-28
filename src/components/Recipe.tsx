import React from "react";

export const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <div className="divider"></div>
      <h3>Instructions</h3>
      <p className="flow-text">{recipe}</p>
    </div>
  );
};
