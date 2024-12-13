import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { privateProcedure, router, mergeRouters } from "../trpc";
import { recipeRouter } from "./recipes";

export const helloRouter = router({
  // hello: publicProcedure
  hello: privateProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});

export const appRouter = mergeRouters(helloRouter, recipeRouter);
// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
