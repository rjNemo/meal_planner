import React from "react";

export const Recipe = props => {
  return (
    <div className="recipe">
      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: props.recipe }} />
    </div>
  );
};
