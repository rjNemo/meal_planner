import { z } from "zod";

const categorySchema = z
  .object({
    idCategory: z.string(),
    strCategory: z.string(),
    strCategoryThumb: z.string().url(),
    strCategoryDescription: z.string(),
  })
  .transform((c) => ({
    identity: c.idCategory,
    name: c.strCategory,
    picture: c.strCategoryThumb,
    description: c.strCategoryDescription,
  }));

export const categoriesResponseSchema = z.object({
  categories: z.array(categorySchema),
});

export type Category = z.infer<typeof categorySchema>;
export type CategoriesResponse = z.infer<typeof categoriesResponseSchema>;

export const categoryRecipeSchema = z
  .object({
    strMeal: z.string(),
    strMealThumb: z.string().url(),
    idMeal: z.string(),
  })
  .transform((meal) => ({
    title: meal.strMeal,
    pictureUrl: meal.strMealThumb,
    id: meal.idMeal,
  }));

export const categoryRecipesResponseSchema = z
  .object({
    meals: z.array(categoryRecipeSchema),
  })
  .transform((data) => ({
    recipes: data.meals,
  }));
