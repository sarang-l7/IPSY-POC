import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createTRPCContext } from "@myorg/trpc/src/init";
import { appRouter } from "@myorg/trpc/src/routers/_app";
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
export { handler as GET, handler as POST };
