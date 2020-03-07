import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MealPage } from "../pages/MealPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const MealController = ({ meal, getMeal, getRandomMeal }) => {
  const { idMeal } = useParams();

  useEffect(() => {
    idMeal === undefined ? getRandomMeal() : getMeal(idMeal);
    // eslint-disable-next-line
  }, []);

  const mealItem = meal.meals[0];

  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strArea,
    strInstructions
  } = mealItem;

  // const setDbPromise = () => {
  //   //check for support
  //   if (!("indexedDB" in window)) {
  //     console.log("This browser doesn't support IndexedDB");
  //     return;
  //   }

  //   var dbPromise = indexedDB.open("chefs-db", 1, function(upgradeDb) {
  //     if (!upgradeDb.objectStoreNames.contains("favourites")) {
  //       var favOS = upgradeDb.createObjectStore("favourites", {
  //         keyPath: "mealName"
  //       });
  //       favOS.createIndex("isFav", "isFav", { unique: true });
  //     }
  //   });
  //   return dbPromise;
  // };

  // const [isFav, setIsFav] = useState(false);

  // var dbPromise = setDbPromise();

  // dbPromise
  //   .then(db => {
  //     var tx = db.transaction("favourites", "readwrite");
  //     var store = tx.objectStore("favourites");
  //     var item = {
  //       mealName: strMeal,
  //       isFav: isFav
  //     };
  //     store.add(item);
  //     return tx.complete;
  //   })
  //   .then(function() {
  //     console.log("added item to the favourite os!");
  //   });

  // const initState = Boolean(localStorage.getItem(strMeal));
  const [isFav, setIsFav] = useState(localStorage.getItem(strMeal) === "fav");

  // console.log(isFav);

  useEffect(() => {
    isFav
      ? localStorage.setItem(strMeal, "fav")
      : localStorage.removeItem(strMeal);
    // console.log(localStorage.getItem(strMeal));
    // console.log(isFav);
  }, [isFav, strMeal]);

  const item = {
    mealName: strMeal,
    imgAddress: strMealThumb,
    videoAddress: strYoutube,
    mealCategory: strCategory,
    mealArea: strArea,
    isFav: isFav,
    setIsFav: setIsFav
  };

  let ingredientList = [];
  var i;
  for (i = 1; i <= 20; i++) {
    var strIng = `strIngredient${i}`;
    var strMes = `strMeasure${i}`;
    if (mealItem[strIng] !== "" && mealItem[strIng] !== null) {
      ingredientList.push([mealItem[strIng], mealItem[strMes]]);
    }
  }

  return meal !== undefined && meal.meals !== null ? (
    <MealPage
      item={item}
      ingredientList={ingredientList}
      strInstructions={strInstructions}
    />
  ) : (
    <NotFoundPage handleClick={getRandomMeal} />
  );
};
