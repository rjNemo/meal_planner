import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MealPage from "./pages/Meal";
import SearchPage from "./pages/Search";
import CategoryListPage from "./pages/CategoryList";
import CategoryPage from "./pages/Category";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  // State Hooks
  const [searchString, setSearchString] = useState("");
  const [categories, setCategories] = useState({ categories: [] });
  const [searchResults, setSearchResults] = useState({ meals: [] });
  // const [isLoading, setIsLoading] = useState(true); For Preloader
  // Default meal object. TODO: Find a better alternative …
  const mealDef = {
    meals: [
      {
        idMeal: "52837",
        strMeal: "Pilchard puttanesca",
        strDrinkAlternate: null,
        strCategory: "Pasta",
        strArea: "Italian",
        strInstructions:
          "Cook the pasta following pack instructions.\r\n\r\nHeat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato pur\u00e9e and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.\r\n\r\nDrain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan.",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
        strTags: null,
        strYoutube: "https://www.youtube.com/watch?v=wqZzLAPmr9k",
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
        dateModified: null
      }
    ]
  };
  const [meal, setMeal] = useState(mealDef);

  // Fetch API functions
  const createURI = (keyword, option) => {
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

  const getFromAPI = (keyword, set, option = null) => {
    const URI = createURI(keyword, option);
    fetch(URI)
      .then(response => response.json())
      .then(data => set(data));
  };

  // Fetch wrappers for each use
  const getRandomMeal = () => {
    // setIsLoading(true);
    getFromAPI("random", setMeal);
    // setIsLoading(false);
  };

  const getMeal = id => {
    getFromAPI(id, setMeal, "lookup");
  };

  const getCategories = () => {
    getFromAPI("categories", setCategories);
  };

  const getSearchResults = () => {
    getFromAPI(searchString, setSearchResults, "search");
  };

  const handleChange = ev => {
    const { value } = ev.target;
    setSearchString(value);
  };
  const buttonUrl = "/random";

  return (
    <Router>
      <Navbar handleClick={getRandomMeal} buttonUrl={buttonUrl} />
      <div className="container">
        <SearchBar
          searchString={searchString}
          handleChange={handleChange}
          onSubmit={getSearchResults}
        />
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage handleClick={getRandomMeal} buttonUrl={buttonUrl} />
        </Route>
        <Route exact path={buttonUrl}>
          <MealPage
            meal={meal}
            getMeal={getRandomMeal}
            // isLoading={isLoading}
          />
        </Route>
        />
        <Route exact path="/categories">
          <CategoryListPage
            categories={categories}
            getCategories={getCategories}
          />
        </Route>
        />
        <Route path="/categories/:strCategory/">
          <CategoryPage
            getFromAPI={getFromAPI}
            getMeal={getMeal}
            setMeal={setMeal}
            meal={meal}
          />
        </Route>
        <Route exact path="/search">
          <SearchPage
            searchString={searchString}
            searchResults={searchResults}
            // getSearchResults={getSearchResults}
          />
        </Route>
        <Route path="/:idMeal">
          <MealPage meal={meal} getMeal={getMeal} />
        </Route>
        <Route>
          <NotFound handleClick={getRandomMeal} />
        </Route>
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
