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
