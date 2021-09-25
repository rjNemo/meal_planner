import { Link } from "react-router-dom";
import { useMeal } from "../store/meal";
import { fetchRandomMeal } from "../store/meal/async";

type Props = {
  url: string;
  size?: string;
  color?: string;
};

export const RandomButton = ({ url, size = "large", color }: Props) => {
  const classString = `waves-effect waves-light btn-${size} ${color}`;
  const { dispatch } = useMeal();
  return (
    <Link to={url}>
      <button className={classString} onClick={() => fetchRandomMeal(dispatch)}>
        Random Recipe
      </button>
    </Link>
  );
};
