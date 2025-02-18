import { getServerSession } from "next-auth";
import { cache } from "react";
import { authOptions } from "./auth";

// Asynchronous context function that returns session from NextAuth
export const createTRPCContext = cache(async () => {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
