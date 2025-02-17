import { createTRPCRouter } from "../init";
import { commercetoolsRouter } from "./commercetools";
import { contentfulRouter } from "./contentful";
import { loginRouter } from "./login";

export const appRouter = createTRPCRouter({
  login: loginRouter,
  contentful: contentfulRouter,
  commerce: commercetoolsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
