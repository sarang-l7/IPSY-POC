import { createTRPCRouter } from "../init";
import { apiRoot } from "../commercetools-init";
import { protectedProcedure } from "../middleware";

export const commercetoolsRouter = createTRPCRouter({
  getProducts: protectedProcedure.query(async ({ ctx }) => {
    try {
      const response = await apiRoot
        .orders()
        .get({ queryArgs: { limit: 10, offset: 0 } })
        .execute();
      return response.body;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw new Error("Failed to fetch orders");
    }
  }),
});
