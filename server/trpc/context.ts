import type { inferAsyncReturnType } from "@trpc/server";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(event: H3Event) {
  const authorization = getRequestHeader(event, "authorization");
  async function getUserFromHeader() {
    if (authorization) {
      return { isAdmin: true };
    }
    return null;
  }
  const user = await getUserFromHeader();
  return {
    user,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
