"use client";

import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import theme from "./theme";

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
      {mounted ? (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      ) : (
        children
      )}
    </ChakraProvider>
  );
}
