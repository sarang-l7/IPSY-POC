import { fetchRequestHandler } from "@ipsy/trpc/server";
import { createTRPCContext } from "@ipsy/trpc";
import { appRouter } from "@ipsy/trpc";
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
export { handler as GET, handler as POST };
