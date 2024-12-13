import { z } from "zod";

export const idSchema = z.string({
  required_error: "recipe id is required",
  invalid_type_error: "recipe id must be a number",
});
