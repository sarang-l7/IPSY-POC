import { Flex } from "@chakra-ui/react";
import "./globals.css";
import { Layout } from "@ipsy/ui";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>
            <Flex
              flex="1"
              overflow="auto"
              align="center"
              justify="center"
              width={"100%"}
            >
              {children}
            </Flex>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
