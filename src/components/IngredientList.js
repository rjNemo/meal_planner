import React from "react";

const IngredientList = props => {
  const { ingredients } = props;
  return (
    <div className="ingredientList">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(ing => (
          <li>
            <b>{ing[0]}:</b> {ing[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IngredientList;
