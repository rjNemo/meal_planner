import React from "react";

const IngredientList = props => {
  const { ingredients } = props;
  return (
    <div className="ingredientList">
      <h2>Ingredient List</h2>
      <ul>
        {ingredients.map(ing => (
          <li>
            {ing[0]}: {ing[1]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IngredientList;
