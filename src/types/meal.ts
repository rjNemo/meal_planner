export default interface Meal {
  mealName: string;
  imgAddress: string;
  videoAddress: string;
  mealCategory: string;
  mealArea: string;
  isFav?: boolean;
}

export interface MealSummary {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealApi {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strYoutube: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
}
