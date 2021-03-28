import { FC } from "react";
import Meal from "../../types/Meal";
import { MealIngredientList } from "./components/MealIngredientList";
import { MealPresentation } from "./components/MealPresentation";
import { MealRecipe } from "./components/MealRecipe";

type Props = {
  ingredients: string[];
  recipe: string;
  meal: Meal;
  handleFavChange: () => void;
};

export const MealPage: FC<Props> = ({
  meal,
  ingredients,
  recipe,
  handleFavChange,
}) => (
  <section className="container">
    <div className="row">
      <div className="col s12 l6">
        <MealPresentation meal={meal} handleFavChange={handleFavChange} />
      </div>
      <div className="col s12 l6">
        <MealIngredientList ingredients={ingredients} />
      </div>
    </div>
    <MealRecipe recipe={recipe} />
  </section>
);
