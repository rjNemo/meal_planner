import { Link } from "react-router-dom";
import { MealSummary } from "../types/meal";

type Props = {
  meal: MealSummary;
  className?: string;
};

export const CardEntry = ({
  meal: { idMeal, strMeal, strMealThumb },
  className = "col s12 m6",
}: Props) => (
  <Link to={`/${idMeal}`}>
    <li>
      <div className={className}>
        <div className="card hoverable">
          <div className="card-image">
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <div className="card-content">
            <h4>{strMeal}</h4>
          </div>
        </div>
      </div>
    </li>
  </Link>
);
