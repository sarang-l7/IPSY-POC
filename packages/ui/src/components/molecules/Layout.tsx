import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header, Footer } from "@ipsy/ui";
import { relative } from "path";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minH="100vh" w="full">
      {/* Header */}
      <Box position="sticky" top="0" zIndex="50" w="full" bg="light">
        <Header />
      </Box>

      {/* Dynamic Page Content */}
      <Flex
        as="main"
        flex="1"
        align="center"
        justify="center"
        direction={"column"}
        position={"relative"}
      >
        {children}
      </Flex>

      {/* Footer */}
      <Box w="full" bg="light">
        <Footer />
      </Box>
    </Flex>
  );
}
