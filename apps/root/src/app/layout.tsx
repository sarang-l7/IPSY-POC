import "./globals.css";
import { TRPCProvider } from "@ipsy/trpc/src/client";
import { ThemeProvider } from "@ipsy/ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
