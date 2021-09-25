type Props = { recipe: string };

export const MealRecipe = ({ recipe }: Props) => (
  <div className="recipe">
    <div className="divider" />
    <h3>Instructions</h3>
    <p className="flow-text">{recipe}</p>
  </div>
);
