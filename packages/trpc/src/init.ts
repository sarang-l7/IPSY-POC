import { initTRPC } from "@trpc/server";
import { createClient } from "contentful";
import { cache } from "react";
import superjson from "superjson";

export const createTRPCContext = cache(async () => {
  return { userId: "user_123" };
});

export const contentfulClient = createClient({
  space: "hmefixu3ou51",
  accessToken: "INwMTNNO6C-tMze-NmyMXh_sEDVEmvtian_ABsEDObk",
});

const t = initTRPC.create({
  transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
