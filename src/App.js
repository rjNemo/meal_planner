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
  // const [isLoading, setIsLoading] = useState(true); For Preloader
  const [searchString, setSearchString] = useState("");
  const [categories, setCategories] = useState({ categories: [] });
  // Find a better alternative …
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

  const createURI = (keyword, filter) => {
    if (filter === null) {
      const ROOT = "https://www.themealdb.com/api/json/v1/1/";
      return `${ROOT}${keyword}.php`;
    } else {
      const ROOT = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
      return `${ROOT}${keyword}`;
    }
  };

  const getMeal = () => {
    // setIsLoading(true);
    getFromAPI("random", setMeal);
    // setIsLoading(false);
  };

  const getCategories = () => {
    getFromAPI("categories", setCategories);
  };

  const getFromAPI = (keyword, set, filter = null) => {
    const URI = createURI(keyword, filter);
    fetch(URI)
      .then(response => response.json())
      .then(data => set(data));
  };

  const handleChange = ev => {
    const { value } = ev.target;
    setSearchString(value);
  };

  return (
    <Router>
      <Navbar handleClick={getMeal} />
      <div className="container">
        <SearchBar searchString={searchString} handleChange={handleChange} />
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} handleClick={getMeal} />}
        />
        <Route
          exact
          path="/meal"
          render={props => (
            <MealPage
              {...props}
              meal={meal}
              getMeal={getMeal}
              // isLoading={isLoading}
            />
          )}
        />
        <Route
          exact
          path="/categories"
          render={props => (
            <CategoryListPage
              {...props}
              categories={categories}
              getCategories={getCategories}
            />
          )}
        />
        <Route path="/categories/:strCategory">
          <CategoryPage getFromAPI={getFromAPI} setMeal={setMeal} />
        </Route>

        <Route path="/categories/:strCategory/:strMeal">
          <MealPage meal={meal} getMeal={getMeal} />
        </Route>
        <Route exact path="/search" component={SearchPage} />
        {/* We'll have to input searchResults somewhere */}
        <Route
          render={props => <NotFound {...props} handleClick={getMeal} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
