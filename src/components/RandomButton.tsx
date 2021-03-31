import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  url: string;
  size?: string;
  handleClick: () => void;
  color?: string;
};

export const RandomButton: FC<Props> = ({
  url,
  size = "large",
  handleClick,
  color,
}) => {
  const classString = `waves-effect waves-light btn-${size} ${color}`;
  return (
    <Link to={url}>
      <button className={classString} onClick={handleClick}>
        Random Recipe
      </button>
    </Link>
  );
};
