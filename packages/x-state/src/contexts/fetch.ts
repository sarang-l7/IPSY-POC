"use client";
import { createActorContext, useMachine } from "@xstate/react";
import { setup, fromPromise, assign, interpret } from "xstate";

type DataType = {
  greeting: string;
} | null;
export const fetchMachine = setup({
  types: {
    context: {} as {
      name: string;
      data: DataType;
    },
  },
  actors: {
    fetchUser: fromPromise(async ({ input }: { input: { name: string } }) => {
      const result = await getGreeting(input?.name);
      console.log(input.name, result);
      return result;
    }),
  },
}).createMachine({
  id: "fetch",
  initial: "idle",
  context: () => ({
    name: "",
    data: null,
  }),
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
      invoke: {
        src: "fetchUser",
        input: ({ event }) => ({ name: event.name }),
        onDone: {
          target: "success",
          actions: assign({
            data: ({ event }) => event.output as unknown as DataType,
          }),
        },
        onError: "failure",
      },
    },
    success: { type: "final" },
    failure: {
      on: {
        RETRY: "loading",
      },
      after: {
        "1000": "loading",
      },
    },
  },
});
function getGreeting(name: string) {
  console.log("Hello", name);
  return name;
}