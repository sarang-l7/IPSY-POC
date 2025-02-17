"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import { ColorModeProvider } from "./color-mode";
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider value={theme}>
      {/* <ColorModeProvider> */}
      {children}
      {/* </ColorModeProvider> */}
    </ChakraProvider>
  );
}
