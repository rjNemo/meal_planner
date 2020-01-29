import React from "react";
import { CardEntry } from "./CardEntry";

export const SearchResult = props => {
  const { meal } = props;
  return <CardEntry item={meal} />;
};
