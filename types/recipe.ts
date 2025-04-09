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
  strCategory: z.string(),
  strArea: z.string(),
  strInstructions: z.string(),
  strMealThumb: z.string().url(),
  strTags: z.string().nullable(),
  strYoutube: z.string(),
  strIngredient1: z.string().nullish(),
  strIngredient2: z.string().nullish(),
  strIngredient3: z.string().nullish(),
  strIngredient4: z.string().nullish(),
  strIngredient5: z.string().nullish(),
  strIngredient6: z.string().nullish(),
  strIngredient7: z.string().nullish(),
  strIngredient8: z.string().nullish(),
  strIngredient9: z.string().nullish(),
  strIngredient10: z.string().nullish(),
  strIngredient11: z.string().nullish(),
  strIngredient12: z.string().nullish(),
  strIngredient13: z.string().nullish(),
  strIngredient14: z.string().nullish(),
  strIngredient15: z.string().nullish(),
  strIngredient16: z.string().nullish(),
  strIngredient17: z.string().nullish(),
  strIngredient18: z.string().nullish(),
  strIngredient19: z.string().nullish(),
  strIngredient20: z.string().nullish(),
  strMeasure1: z.string().nullish(),
  strMeasure2: z.string().nullish(),
  strMeasure3: z.string().nullish(),
  strMeasure4: z.string().nullish(),
  strMeasure5: z.string().nullish(),
  strMeasure6: z.string().nullish(),
  strMeasure7: z.string().nullish(),
  strMeasure8: z.string().nullish(),
  strMeasure9: z.string().nullish(),
  strMeasure10: z.string().nullish(),
  strMeasure11: z.string().nullish(),
  strMeasure12: z.string().nullish(),
  strMeasure13: z.string().nullish(),
  strMeasure14: z.string().nullish(),
  strMeasure15: z.string().nullish(),
  strMeasure16: z.string().nullish(),
  strMeasure17: z.string().nullish(),
  strMeasure18: z.string().nullish(),
  strMeasure19: z.string().nullish(),
  strMeasure20: z.string().nullish(),
  strSource: z.string().nullish(),
  strImageSource: z.string().nullable(),
});

export const apiResponseSchema = z.object({
  meals: z.array(mealSchema),
});

export type Meal = z.infer<typeof mealSchema>;

export type ApiResponse = z.infer<typeof apiResponseSchema>;
