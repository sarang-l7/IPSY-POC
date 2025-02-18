"use client";
import { Flex } from "@chakra-ui/react";
import "./globals.css";
import { Layout, ThemeProvider } from "@ipsy/ui";
import { CartMachineReactContext } from "@ipsy/x-state";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CartMachineReactContext.Provider>
            <Layout>
              <Flex flex="1" overflow="auto" align="center" justify="center">
                {children}
              </Flex>
            </Layout>
          </CartMachineReactContext.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
