import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, privateProcedure, router } from "../trpc";

export const appRouter = router({
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

// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
