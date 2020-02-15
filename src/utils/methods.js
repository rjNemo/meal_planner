export const createURI = (keyword, option) => {
  const ROOT = "https://www.themealdb.com/api/json/v1/1/";
  if (option === null) {
    return `${ROOT}${keyword}.php`;
  } else if (option === "filter") {
    return `${ROOT}${option}.php?c=${keyword}`;
  } else if (option === "lookup") {
    return `${ROOT}${option}.php?i=${keyword}`;
  } else if (option === "search") {
    return `${ROOT}${option}.php?s=${keyword}`;
  }
};

export const getData = (keyword, set, option = null) => {
  const URI = createURI(keyword, option);
  fetch(URI)
    .then(response => response.json())
    .catch(error => console.info(error + "url:" + URI))
    .then(data => set(data));
};

export const upFirstChar = lower => {
  return lower.replace(/^\w/, c => c.toUpperCase());
};

export const addToFavourites = () => {};
