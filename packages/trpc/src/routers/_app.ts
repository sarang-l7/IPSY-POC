import { z } from "zod";
import { baseProcedure, contentfulClient, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z
        .object({
          text: z.string(),
        })
        .nullish()
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input?.text ?? "world"}`,
      };
    }),
  login: baseProcedure
    // using zod schema to validate and infer input values
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation((opts) => {
      // Here some login stuff would happen
      return {
        user: {
          name: opts.input.name,
          role: "ADMIN",
        },
      };
    }),
  getEntry: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const entry = await contentfulClient.getEntry(input.id);
      return entry.fields as Record<string, unknown>; // Explicitly type the return value
    }),

  getEntriesByType: baseProcedure
    .input(z.object({ contentType: z.string() }))
    .query(async ({ input }) => {
      const entries = await contentfulClient.getEntries({
        content_type: input.contentType,
      });
      return entries.items.map(
        (item) => item.fields as Record<string, unknown>
      );
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
