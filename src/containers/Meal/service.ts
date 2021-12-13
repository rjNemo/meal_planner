import { MealApi } from "../../types/meal";

export const buildIngredientList = (mealItem: MealApi): string[][] => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    let strIng = `strIngredient${i}`;
    let strMes = `strMeasure${i}`;
    // @ts-ignore
    if (!!mealItem?.[strIng] && !!mealItem?.[strIng]) {
      // @ts-ignore
      ingredients.push([mealItem?.[strIng], mealItem?.[strMes]]);
    }
  }
  return ingredients;
};

export const buildMealProps = (mealItem: MealApi) => ({
  mealName: mealItem?.strMeal,
  imgAddress: mealItem?.strMealThumb,
  videoAddress: mealItem?.strYoutube,
  mealCategory: mealItem?.strCategory,
  mealArea: mealItem?.strArea,
});
