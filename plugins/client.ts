import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import type { AppRouter } from "~/server/trpc/routers";

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders();
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "/api/trpc",
        headers() {
          // add custom headers here
          return {
            Authorization: "Bearer token",
            ...headers,
          };
        },
      }),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});
