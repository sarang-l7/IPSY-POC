"use client";

import { SessionProvider } from "next-auth/react";
import { TRPCProvider } from "@ipsy/trpc/client";
import { ThemeProvider } from "@ipsy/ui";
import { CartMachineReactContext } from "@ipsy/x-state";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TRPCProvider>
        <ThemeProvider>
          <CartMachineReactContext.Provider>
            {children}
          </CartMachineReactContext.Provider>
        </ThemeProvider>
      </TRPCProvider>
    </SessionProvider>
  );
}
