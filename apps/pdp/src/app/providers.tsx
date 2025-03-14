"use client";

import { SessionProvider } from "next-auth/react";
import { TRPCProvider } from "@ipsy/trpc/client";
import { ThemeProvider } from "@ipsy/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TRPCProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </TRPCProvider>
    </SessionProvider>
  );
}
