import { FC } from "react";
import { Link } from "react-router-dom";
import { upFirstChar } from "../utils/methods";

type Props = {
  link: string;
  textColor?: string;
};

export const FooterLink: FC<Props> = ({ link, textColor = "" }) => {
  const textColorClass = `${textColor}-text`;
  return (
    <li>
      <Link
        className={`${textColorClass} waves-effect text-lighten-3`}
        to={`/${link}`}
      >
        {upFirstChar(link)}
      </Link>
    </li>
  );
};
