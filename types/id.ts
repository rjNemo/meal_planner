import { z } from "zod";

export const idSchema = z
  .number({
    required_error: "recipe id is required",
    invalid_type_error: "recipe id must be a number",
  })
  .positive("recipe id must be positive");
