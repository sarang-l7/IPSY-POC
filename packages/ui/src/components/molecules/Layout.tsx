import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Header, Footer } from "@ipsy/ui";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minH="100vh" w="full">
      {/* Header */}
      <Box position="sticky" top="0" zIndex="50" w="full" bg="bg.light">
        <Header />
      </Box>

      {/* Dynamic Page Content */}
      <Flex as="main" flex="1" align="center" justify="center">
        {children}
      </Flex>

      {/* Footer */}
      <Box w="full" bg="bg.light">
        <Footer />
      </Box>
    </Flex>
  );
}
