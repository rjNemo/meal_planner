import React, { useState } from "react";
import { Router } from "./utils/router";

import { PreLoader } from "./components/PreLoader";

import { useAuth0 } from "./utils/auth0-spa";
import { getData } from "./utils/methods";
import history from "./utils/history";

import "./index.css";
import MainLayout from "./layouts/MainLayout";
import MainRouter from "./controllers/MainRouter";

export const App = () => {
  const { loading } = useAuth0();
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState({ meals: [] });
  // Default meal object. TODO: Find a better alternative …
  const mealDef = {
    meals: [
      {
        idMeal: "52837",
        strMeal: "Chef's meal",
        strDrinkAlternate: null,
        strCategory: "yummy",
        strArea: "Mine",
        strInstructions:
          "Cook the pasta following pack instructions.\r\n\r\nHeat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato pur\u00e9e and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.\r\n\r\nDrain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan.",
        strMealThumb: require("./images/breakfast.svg"),
        // "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
        strTags: null,
        strYoutube: "#",
        strIngredient1: "Spaghetti",
        strIngredient2: "Olive Oil",
        strIngredient3: "Onion",
        strIngredient4: "Garlic",
        strIngredient5: "Red Chilli",
        strIngredient6: "Tomato Puree",
        strIngredient7: "Pilchards",
        strIngredient8: "Black Olives",
        strIngredient9: "Parmesan",
        strIngredient10: "",
        strIngredient11: "",
        strIngredient12: "",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1: "300g",
        strMeasure2: "1 tbls",
        strMeasure3: "1 finely chopped ",
        strMeasure4: "2 cloves minced",
        strMeasure5: "1",
        strMeasure6: "1 tbls",
        strMeasure7: "425g",
        strMeasure8: "70g",
        strMeasure9: "Shaved",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12: "",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "https://www.bbcgoodfood.com/recipes/pilchard-puttanesca",
        dateModified: null,
      },
    ],
  };

  const [meal, setMeal] = useState(mealDef);

  const getMeal = (id) => {
    getData(id, setMeal, "lookup");
  };

  const getRandomMeal = () => {
    getData("random", setMeal);
  };

  const getSearchResults = (e) => {
    searchString === ""
      ? e.preventDefault()
      : getData(searchString, setSearchResults, "search");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchString(value);
  };

  const buttonUrl = "/random";

  return loading ? (
    <div className="container center-align valign-wrapper">
      <PreLoader />
    </div>
  ) : (
    <Router history={history}>
      <MainLayout
        buttonUrl={buttonUrl}
        meal={meal}
        getMeal={getMeal}
        getRandomMeal={getRandomMeal}
        searchString={searchString}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        handleChange={handleChange}
        setSearchString={setSearchString}
        getSearchResults={getSearchResults}
      >
        <MainRouter
          buttonUrl={buttonUrl}
          meal={meal}
          getMeal={getMeal}
          getRandomMeal={getRandomMeal}
          searchString={searchString}
          searchResults={searchResults}
        />
      </MainLayout>
    </Router>
  );
};
