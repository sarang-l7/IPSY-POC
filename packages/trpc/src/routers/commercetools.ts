import { baseProcedure, createTRPCRouter } from "../init";
import { apiRoot } from "../commercetools";

export const commercetoolsRouter = createTRPCRouter({
  getProducts: baseProcedure.query(async () => {
    try {
      const response = await apiRoot.products().get().execute();
      return response.body.results;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }),
});
