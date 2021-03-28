import React from "react";
import { Link } from "react-router-dom";
import { upFirstChar } from "../utils/methods";

export const FooterLink = ({ link, textColor = "" }) => {
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
