"use client";
import { fetchMachine } from "@ipsy/x-state";
import { useMachine } from "@xstate/react";
import React from "react";
// import { FetchContext } from "./greeting";

export default function Test() {
  //   const data1 = useActor(fetchMachine, { input: { name: "Nimy" } });
  // const data = FetchContext.useActorRef();
  //   const data2 = FetchContext.useSelector((state) => state.context.data);
  const [state, send] = useMachine(fetchMachine);
  console.log("state", state.context.data, state.value);
  return (
    <div>
      <button onClick={() => send({ type: "FETCH", name: "Test" })}>Test</button>
    </div>
  );
}
