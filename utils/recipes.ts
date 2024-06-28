import type { ApiResponse, Meal, Recipe } from "~/types/recipe";
import { apiResponseSchema } from "~/types/recipe";

export function parseRecipeData(data: ApiResponse): Recipe[] {
  return apiResponseSchema.parse(data).meals.map((meal: Meal) => {
    const ingredients: { name: string; quantity: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientName = meal[`strIngredient${i}`];
      const ingredientQuantity = meal[`strMeasure${i}`];

      if (ingredientName?.trim() && ingredientQuantity?.trim()) {
        ingredients.push({
          name: ingredientName.trim(),
          quantity: ingredientQuantity.trim(),
        });
      }
    }

    return {
      title: meal.strMeal,
      pictureUrl: meal.strMealThumb,
      videoUrl: meal.strYoutube,
      category: meal.strCategory,
      origin: meal.strArea,
      ingredients,
      instructions: meal.strInstructions,
    };
  });
}
