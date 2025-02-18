import "server-only";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import { createCallerFactory } from "./init";
import { makeQueryClient } from "./query-client";
import { appRouter } from "./routers/_app";
import { createTRPCContext } from "./context";
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(appRouter)(createTRPCContext);
export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient
);

export { fetchRequestHandler } from "@trpc/server/adapters/fetch";
