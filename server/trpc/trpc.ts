import { initTRPC } from "@trpc/server";
import type { Context } from "~/server/trpc/context";
import { TRPCError } from "@trpc/server";
// import { authMiddleware } from "~/server/trpc/middleware";

const t = initTRPC.context<Context>().create();

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;
export const mergeRouters = t.mergeRouters;

export const authMiddleware = middleware(({ next, ctx }) => {
  if (!ctx.user?.isAdmin) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const privateProcedure = t.procedure.use(authMiddleware);
