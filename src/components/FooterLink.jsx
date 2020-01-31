import React from "react";
import { Link } from "react-router-dom";
import { upFirstChar } from "../utils/methods";

export const FooterLink = ({ link }) => {
  return (
    <li>
      <Link className="grey-text text-lighten-3" to={`/${link}`}>
        {upFirstChar(link)}
      </Link>
    </li>
  );
};
