import React from "react";
import { Flex } from "@chakra-ui/react";
import { Layout } from "@ipsy/ui";

export default function Home() {
  return (
    <Layout>
      <Flex flex="1" overflow="auto" align="center" justify="center">
        Load products here...
      </Flex>
    </Layout>
  );
}
