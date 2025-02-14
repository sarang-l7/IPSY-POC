"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}
