"use client";
import { assign, createMachine, fromPromise } from "xstate";
import { createActorContext } from "@xstate/react";
import { products } from "@/utils/constants";

const addToCart = assign(({ context, event }) => {
  const item = context.products.find((item: any) => item.id == event.id);
  return {
    ...context,
    cart: [...context.cart, item],
  };
});

const addToCartRequest = async (id: any) => {
  // fetch request;
  console.log("debug:: API call:: id::", id)
  return id
}

export const cartMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnALgWVcgFgJYB2YAdIRADZgDEAggCKMD6AKgPIsDC9ASmwDaABgC6iUAAcA9rEKZC04hJAAPRAEYAHFrIA2A3oAsATjMBWAOxaAzCZsAaEAE9Eem2Q2H7ZjUcs2liYAvsFOaFi4BCTkqBAQJFC0EErkJABu0gDWsfFs0twYmCLiSCAycgpKKq4IGl5kNk02RgBMdgYtJq1O6gh6JsJkrcK2RuZGRnY2Gq2h4UVRRKRkcQnESWDo6NLoZJJUqJgAZrsAtqt5BUUlKhXyisplfXoaQ61as5atrRomeuZ6k5auY9I1mm0Ou5THMwiAIjg8MtyLAAK7IZBwWC0PgAUQAyrihGI7rIHtVnogALQDcE2VoGExaYQfIxaPTAxDtExkYR84RTPRaVn2IzzeGLJExMhbHboHEEom3Mr3KpPUB9EyAsiWPy2VqWAGWcytIychAeY2AibCPTCeqBOyhOHEaQQOAqBFLGKkyqPFR9Kn1Sx0hkDZms9nmqm2MhGeqAu0aKxJvTir1SlaUGi+8nqtSINrmjR2fSGPSG37CrTpyXRFZrRK5tUBxBNIaDPStQH2Zm6rTFhrNFrczow2uRTMo9GY2DwFVkluUhDCc1GAyecuV7QGkyWCeI+vkWW7Zv+5fs8y8tm-du-SvmmxWXk6NnuenGWxp51AA */
    id: "cartMachine",
    initial: "idle",
    context: {
      product: {
        id: 200,
        name: "Wireless Headset",
      },
      products,
      cart: [] as Object[],
    } as any,
    states: {
      idle: {
        on: {
          ADD_TO_CART: {
            actions: [addToCart],
            target: "adding",
          },
        },
      },

      adding: {
        invoke: {
          id: "addToCart",
          src: fromPromise(({ input }) => addToCartRequest(input)),
          input: {},
          onDone: {
            // actions: addToCart,
            target: "success",
          },

          onError: {
            target: "error",
            reenter: true,
          },
        },
      },
      success: {
        on: {
          RESET: {
            target: "idle",
          },
        },
      },
      error: {
        on: {
          RESET: {
            target: "idle",
          },
        },
      },
    },
  },
  {
    actions: { addToCart },
    guards: {},
  }
);

const CartMachineReactContext = createActorContext(cartMachine);

export default CartMachineReactContext;
