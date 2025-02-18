"use client"
import { createMachine, fromPromise } from "xstate";
import { createActorContext } from "@xstate/react";

function addToCart() {
  console.log("debug:: add to cart called");
}

function testEvent() {
    console.log("debug:: test event called");
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
    } as {
      productId: string;
      product: object | undefined;
      error: unknown;
      allProducts: object[];
      cartProducts: object[];
    },
    on:{
        "test_event": {
            actions: testEvent
        }
    },
    states: {
      idle: {
        on: {
          ADD_TO_CART: {
            actions: addToCart,
            target: "adding",
          },
        },
      },

      adding: {
        invoke: {
          id: "addToCart",
          src: "addToCart",
          input: {},
          onDone: {
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