// import { fetchMachine } from "@ipsy/x-state";
// import { createActorContext } from "@xstate/react";
import Test from "./test";

// export const FetchContext = createActorContext(fetchMachine);
export default function Greeting() {
  return (
    // <FetchContext.Provider>
    <Test />
    // </FetchContext.Provider>
  );
}
