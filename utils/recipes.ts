import type { Recipe } from "~/types/recipe";

export function parseRecipeData(data: { meals: unknown }): Recipe[] {
  return data.meals.map((meal: unknown) => {
    // Extract ingredients and measurements
    const ingredients: { name: string; quantity: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientName = meal[`strIngredient${i}`];
      const ingredientQuantity = meal[`strMeasure${i}`];
      if (
        ingredientName &&
        ingredientName.trim() &&
        ingredientQuantity &&
        ingredientQuantity.trim()
      ) {
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
      ingredients: ingredients,
      instructions: meal.strInstructions,
    };
  });
}
