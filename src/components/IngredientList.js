import React from "react";

export const IngredientList = props => {
  const { ingredients } = props;
  return (
    <div className="ingredientList">
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>
            <b>{ing[0]}:</b> {ing[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};
