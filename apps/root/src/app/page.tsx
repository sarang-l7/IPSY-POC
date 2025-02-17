import { trpc, HydrateClient } from "@ipsy/trpc/src/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Flex } from "@chakra-ui/react";
import { Layout } from "@ipsy/ui";
import Image from "next/image";

export default async function Home() {
  const banner = await trpc.contentful.getEntriesByType({ contentType: "homepage" });
  const bannerUrl = banner?.[0]?.heroBanner?.fields?.file;

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
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
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
