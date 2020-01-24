import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MealPage from "./pages/Meal";
import SearchPage from "./pages/Search";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [searchString, setSearchString] = useState("");
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
          "Cook the pasta following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato pur\u00e9e and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.\r\n\r\nDrain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan.",
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
  const [mealItem, setMeal] = useState(mealDef);
  const URI = "https://www.themealdb.com/api/json/v1/1/random.php";

  const getMeal = () => {
    fetch(URI)
      .then(response => response.json())
      .then(mealItem => setMeal(mealItem));
  };

  const handleChange = ev => {
    const { value } = ev.target;
    setSearchString(value);
  };

  const handleClick = () => {
    getMeal();
  };

  return (
    <Router>
      <Navbar
        searchString={searchString}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage {...props} getMeal={getMeal} handleClick={handleClick} />
          )}
        />
        <Route
          exact
          path="/meal"
          render={props => <MealPage {...props} meal={mealItem} />}
        />
        <Route exact path="/search" component={SearchPage} />
        {/* We'll have to input searchResults somewhere */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
