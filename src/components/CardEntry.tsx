import { FC } from "react";
import { Link } from "react-router-dom";
import { MealSummary } from "../types/meal";

type Props = {
  meal: MealSummary;
  className?: string;
};

export const CardEntry: FC<Props> = ({ meal, className = "col s12 m6" }) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  return (
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
};
