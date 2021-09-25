import { apiRoot } from "../constants";

type Option = "filter" | "lookup" | "search";

const createURI = (keyword: string, option?: Option) => {
  if (!option) {
    return `${apiRoot}${keyword}.php`;
  }

  switch (option) {
    case "filter": {
      return `${apiRoot}${option}.php?c=${keyword}`;
    }
    case "lookup": {
      return `${apiRoot}${option}.php?i=${keyword}`;
    }
    case "search": {
      return `${apiRoot}${option}.php?s=${keyword}`;
    }
    default: {
      throw Error("Unexpected URI");
    }
  }
};

export const getData = async (keyword: string, option?: Option) => {
  const URI = createURI(keyword, option);

  try {
    const response = await fetch(URI);
    return await response.json();
  } catch (error) {
    return console.warn(error + "url:" + URI);
  }
};
