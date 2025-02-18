import { createTRPCRouter } from "../init";
import { protectedProcedure } from "../middleware";

export const authRouter = createTRPCRouter({
  privateData: protectedProcedure.query(({ ctx }) => {
    if (!ctx.session?.user) {
      throw new Error("Unauthorized");
    }
    return `${ctx.session.user.email}`;
  }),
});
