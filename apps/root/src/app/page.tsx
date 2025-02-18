import { trpc, HydrateClient } from "@ipsy/trpc/src/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Generator from "@/components/home/generator";
import { Login } from "@/components/home/login";
import { Flex } from "@chakra-ui/react";
import { Layout } from "@ipsy/ui";

export default async function Home() {
  const greeting = await trpc.hello();
  // const result = await trpc.iterable();
  // const { value } = await result.next();
  // console.log(value);
  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Flex
            flex="1"
            overflow="auto"
            align="center"
            justify="center"
            direction="column"
          >
            Load CMS contents here...
            <p>{greeting?.greeting}</p>
            <Generator />
            <Login />
          </Flex>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
