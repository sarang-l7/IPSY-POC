import { Flex } from "@chakra-ui/react";
import "./globals.css";
import { Layout, ThemeProvider } from "@ipsy/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Layout>
            <Flex flex="1" overflow="auto" align="center" justify="center">
              {children}
            </Flex>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
