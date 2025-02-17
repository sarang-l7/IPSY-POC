import z from "zod";
import { baseProcedure, contentfulClient, createTRPCRouter } from "../init";
import { ContentfulField } from "../interfaces/contentful";

export const contentfulRouter = createTRPCRouter({
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
        (item) => item.fields as unknown as ContentfulField
      );
    }),
});
