"use client";

import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ColorModeProvider } from "./color-mode";

export default function RootThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ChakraProvider value={theme}>
      {/* Render children immediately to avoid Chakra UI context error */}
      {mounted ? <ColorModeProvider>{children}</ColorModeProvider> : children}
    </ChakraProvider>
  );
}
