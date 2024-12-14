import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import type { Meal } from "~/types/recipe";
import { parseRecipeData } from "~/utils/recipes";

const { apiUrl } = useRuntimeConfig();

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export const recipeRouter = router({
  recipeGet: publicProcedure
    .input(
      z.coerce
        .number({
          required_error: "recipe id is required",
          invalid_type_error: "recipe id must be a number",
        })
        .positive("recipe id must be positive"),
    )
    .query(async ({ input }) => {
      const data = await $fetch<{ meals: Meal[] }>(
        new URL(`lookup.php?i=${input}`, apiUrl).href,
      );
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
    const data = await $fetch<{ meals: Meal[] }>(
      new URL("random.php", apiUrl).toString(),
    );
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
      }),
    )
    .query(async ({ input }) => {
      const data = await $fetch<{ meals: Meal[] }>(
        new URL(`search.php?s=${input}`, apiUrl).href,
      );
      if (!data?.meals) {
        return [];
      }
      const recipes = parseRecipeData(data);
      return recipes;
    }),
  categories: publicProcedure.query(async () => {
    const data = await $fetch<{ categories: Category[] }>(
      new URL("categories.php", apiUrl).toString(),
    );
    
    if (!data?.categories) {
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to fetch categories",
      });
    }

    return data.categories;
  }),
});
