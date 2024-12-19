import { z } from "zod";
import {
  categoriesResponseSchema,
  categoryRecipesResponseSchema,
  type CategoriesResponse,
} from "~/types/category";
import type { Meal } from "~/types/recipe";
import { parseRecipeData } from "~/utils/recipes";
import { publicProcedure, router } from "../trpc";

const { apiUrl } = useRuntimeConfig();

export const recipeRouter = router({
  recipesByCategory: publicProcedure.input(z.string()).query(async ({ input }) => {
    const data = await $fetch<{ meals: Meal[] }>(new URL(`filter.php?c=${input}`, apiUrl).href);

    const result = categoryRecipesResponseSchema.safeParse(data);

    if (!result.success) {
      throw createError({
        statusCode: 404,
        statusMessage: "Recipes for category not found",
      });
    }

    return result.data.recipes;
  }),

  recipeGet: publicProcedure
    .input(
      z.coerce
        .number({
          required_error: "recipe id is required",
          invalid_type_error: "recipe id must be a number",
        })
        .positive("recipe id must be positive")
    )
    .query(async ({ input }) => {
      const data = await $fetch<{ meals: Meal[] }>(new URL(`lookup.php?i=${input}`, apiUrl).href);
      if (!data?.meals) {
        throw createError({
          statusCode: 404,
          statusMessage: "Recipe not found",
        });
      }

      const recipes = parseRecipeData(data);
      return recipes[0];
    }),

  recipeRandom: publicProcedure.query(async () => {
    const data = await $fetch<{ meals: Meal[] }>(new URL("random.php", apiUrl).toString());
    if (!data?.meals) {
      throw createError({
        statusCode: 500,
      });
    }

    const recipes = parseRecipeData(data);
    return recipes[0];
  }),

  recipeSearch: publicProcedure
    .input(
      z.string({
        required_error: "search query is required",
      })
    )
    .query(async ({ input }) => {
      const data = await $fetch<{ meals: Meal[] }>(new URL(`search.php?s=${input}`, apiUrl).href);
      if (!data?.meals) {
        return [];
      }
      const recipes = parseRecipeData(data);
      return recipes;
    }),

  listCategories: publicProcedure.query(async () => {
    const response = await $fetch<CategoriesResponse>(new URL("categories.php", apiUrl).href);

    const result = categoriesResponseSchema.safeParse(response);

    if (!result.success) {
      throw createError({
        statusCode: 500,
        statusMessage: "Invalid API response format",
        data: result.error,
      });
    }

    return result.data.categories.sort((a, b) => a.name.localeCompare(b.name));
  }),
});
