import type { inferRouterOutputs } from "@trpc/server";
import { mergeRouters } from "../trpc";
import { recipeRouter } from "./recipes";
import { categoryRouter } from "./categories";

export const appRouter = mergeRouters(categoryRouter, recipeRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
