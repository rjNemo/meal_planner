import { z } from "zod";

export type Recipe = {
  id: string;
  title: string;
  pictureUrl: string;
  videoUrl: string;
  category: string;
  origin: string;
  ingredients: { name: string; quantity: string }[];
  instructions: string;
};

const mealSchema = z.object({
  idMeal: z.string(),
  strMeal: z.string(),
  strDrinkAlternate: z.string().nullable(),
  strCategory: z.string(),
  strArea: z.string(),
  strInstructions: z.string(),
  strMealThumb: z.string().url(),
  strTags: z.string().nullable(),
  strYoutube: z.string(),
  strIngredient1: z.string().optional(),
  strIngredient2: z.string().optional(),
  strIngredient3: z.string().optional(),
  strIngredient4: z.string().optional(),
  strIngredient5: z.string().optional(),
  strIngredient6: z.string().optional(),
  strIngredient7: z.string().optional(),
  strIngredient8: z.string().optional(),
  strIngredient9: z.string().optional(),
  strIngredient10: z.string().optional(),
  strIngredient11: z.string().optional(),
  strIngredient12: z.string().optional(),
  strIngredient13: z.string().optional(),
  strIngredient14: z.string().optional(),
  strIngredient15: z.string().optional(),
  strIngredient16: z.string().optional(),
  strIngredient17: z.string().optional(),
  strIngredient18: z.string().optional(),
  strIngredient19: z.string().optional(),
  strIngredient20: z.string().optional(),
  strMeasure1: z.string().optional(),
  strMeasure2: z.string().optional(),
  strMeasure3: z.string().optional(),
  strMeasure4: z.string().optional(),
  strMeasure5: z.string().optional(),
  strMeasure6: z.string().optional(),
  strMeasure7: z.string().optional(),
  strMeasure8: z.string().optional(),
  strMeasure9: z.string().optional(),
  strMeasure10: z.string().optional(),
  strMeasure11: z.string().optional(),
  strMeasure12: z.string().optional(),
  strMeasure13: z.string().optional(),
  strMeasure14: z.string().optional(),
  strMeasure15: z.string().optional(),
  strMeasure16: z.string().optional(),
  strMeasure17: z.string().optional(),
  strMeasure18: z.string().optional(),
  strMeasure19: z.string().optional(),
  strMeasure20: z.string().optional(),
  strSource: z.string().optional(),
  strImageSource: z.string().nullable(),
  strCreativeCommonsConfirmed: z.string().nullable(),
  dateModified: z.string().optional().nullable(),
});

export const apiResponseSchema = z.object({
  meals: z.array(mealSchema),
});

export type Meal = z.infer<typeof mealSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;
