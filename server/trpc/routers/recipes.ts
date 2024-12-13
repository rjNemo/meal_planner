import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import type { Meal } from "~/types/recipe";
import { parseRecipeData } from "~/utils/recipes";

const { apiUrl } = useRuntimeConfig();

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
});
