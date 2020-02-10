import React from "react";
import { MealPresentation } from "../components/MealPresentation";
import { IngredientList } from "../components/IngredientList";
import { Recipe } from "../components/Recipe";

export const MealPage = ({ item, ingredientList, strInstructions }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l6">
          <MealPresentation meal={item} />
        </div>
        <div className="col s12 l6">
          <IngredientList ingredients={ingredientList} />
        </div>
      </div>
      <Recipe recipe={strInstructions} />
    </div>
  );
};
