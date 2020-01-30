import React from "react";
import { Link } from "react-router-dom";
import { upFirstChar } from "../utils/methods";

export const FooterLink = ({ link, i }) => {
  return (
    <li key={i}>
      <Link className="grey-text text-lighten-3" to={`/${link}`}>
        {upFirstChar(link)}
      </Link>
    </li>
  );
};
