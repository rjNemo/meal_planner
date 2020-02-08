import React from "react";

export const Recipe = props => {
  return (
    <div className="recipe">
      <div className="divider"></div>
      <h3>Instructions</h3>
      <p className="flow-text">{props.recipe}</p>
    </div>
  );
};
