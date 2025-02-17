import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";

export const loginRouter = createTRPCRouter({
  login: baseProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation((opts) => {
      return {
        user: {
          email: opts.input.email,
        },
      };
    }),
});
