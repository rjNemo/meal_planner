import type { inferRouterOutputs } from "@trpc/server";
import { mergeRouters } from "../trpc";
import { recipeRouter } from "./recipes";

export const appRouter = mergeRouters(recipeRouter);

export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
