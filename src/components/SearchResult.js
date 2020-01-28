import React from "react";
import CardEntry from "./CardEntry";

const SearchResult = props => {
  const { meal } = props;
  return <CardEntry item={meal} />;
};

export default SearchResult;
