import React from "react";

export const createURI = (keyword: string, option?: string) => {
  const ROOT = "https://www.themealdb.com/api/json/v1/1/";
  if (!option) {
    return `${ROOT}${keyword}.php`;
  }

  switch (option) {
    case "filter": {
      return `${ROOT}${option}.php?c=${keyword}`;
    }
    case "lookup": {
      return `${ROOT}${option}.php?i=${keyword}`;
    }
    case "search": {
      return `${ROOT}${option}.php?s=${keyword}`;
    }
    default: {
      throw Error("Unexpected URI");
    }
  }
};

export const getData = (
  keyword: string,
  set: React.Dispatch<React.SetStateAction<any>>,
  option?: string
) => {
  const URI = createURI(keyword, option);

  fetch(URI)
    .then((response) => response.json())
    .catch((error) => console.warn(error + "url:" + URI))
    .then((data) => set(data));
};
