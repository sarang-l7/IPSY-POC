import { fetchRequestHandler } from "@ipsy/trpc/src/server";
import { createTRPCContext } from "@ipsy/trpc/src/context";
import { appRouter } from "@ipsy/trpc/src/routers/_app";
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
export { handler as GET, handler as POST };
