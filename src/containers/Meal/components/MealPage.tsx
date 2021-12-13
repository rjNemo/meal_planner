import { Meal } from "../../../types/meal";
import { MealIngredientList } from "./MealIngredientList";
import { MealPresentation } from "./MealPresentation";
import { MealRecipe } from "./MealRecipe";

type Props = {
  ingredients: string[][];
  recipe: string;
  meal: Meal;
};

export const MealPage = ({ meal, ingredients, recipe }: Props) => (
  <section className="container">
    <div className="row">
      <div className="col s12 l6">
        <MealPresentation meal={meal} />
      </div>
      <div className="col s12 l6">
        <MealIngredientList ingredients={ingredients} />
      </div>
    </div>
    <MealRecipe recipe={recipe} />
  </section>
);
