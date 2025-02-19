import { Flex } from "@chakra-ui/react";
import "./globals.css";
import { TRPCProvider } from "@ipsy/trpc/client";
import { Layout, ThemeProvider } from "@ipsy/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <ThemeProvider>
            <Layout>
              <Flex flex="1" overflow="auto" align="center" justify="center" width={"100%"}>
                {children}
              </Flex>
            </Layout>
          </ThemeProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
