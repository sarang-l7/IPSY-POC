import { Box, Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";

export default async function Orders({ children }) {
  return (
    <Box spaceY={4} width={"100%"} padding={4} justifyItems="center">
      <Flex width="100%">
        <Suspense fallback="Laoding...">{children}</Suspense>
      </Flex>
    </Box>
  );
}
