import { baseProcedure, createMiddleware } from "./init";
import { TRPCError } from "@trpc/server";

// Middleware to enforce authentication
const isAuthenticated = createMiddleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to access this resource",
      });
    }
  
    return next({
      ctx: {
        ...ctx,
        user: ctx.session.user, // Attach user to context
      },
    });
  });
  
  // Protected procedures (requires authentication)
  export const protectedProcedure = baseProcedure.use(isAuthenticated);