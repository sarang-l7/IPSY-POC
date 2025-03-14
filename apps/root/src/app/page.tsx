import { trpc } from "@ipsy/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export default async function Home() {
  const banner = await trpc.contentful.getEntriesByType({
    contentType: "homepage",
  });
  const bannerUrl = banner?.[0]?.heroBanner?.fields?.file;

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Flex
          overflow="auto"
          align="center"
          justify="center"
          position={"relative"}
          width={"100%"}
        >
          <Image
            src={`https:${bannerUrl?.url}`}
            alt=""
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={bannerUrl?.details?.image?.width}
            height={bannerUrl?.details?.image?.height}
            priority
          />
        </Flex>
      </Suspense>
    </ErrorBoundary>
  );
}
