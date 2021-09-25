import { Link } from "react-router-dom";
import { upFirstChar } from "../utils/string";

type Props = {
  link: string;
  textColor?: string;
};

export const FooterLink = ({ link, textColor = "" }: Props) => {
  const textColorClass = `${textColor}-text`;
  return (
    <li>
      <Link className={`${textColorClass} waves-effect text-lighten-3`} to={`/${link}`}>
        {upFirstChar(link)}
      </Link>
    </li>
  );
};
