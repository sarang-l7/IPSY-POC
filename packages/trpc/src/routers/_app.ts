import { createTRPCRouter } from "../init";
import { commercetoolsRouter } from "./commercetools";
import { contentfulRouter } from "./contentful";
import { authRouter } from "./login";

export const appRouter = createTRPCRouter({
  login: authRouter,
  contentful: contentfulRouter,
  commerce: commercetoolsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
