type Props = { ingredients: string[][] };

export const MealIngredientList = ({ ingredients }: Props) => (
  <div className="ingredientList">
    <table className="striped highlight responsive-table">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ing, i) => (
          <tr key={i}>
            <td>{ing[0]}</td>
            <td>{ing[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
