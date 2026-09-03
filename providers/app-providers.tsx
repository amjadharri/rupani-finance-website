"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/api";
import { AuthProvider } from "@/lib/auth";
import { ThemeProvider } from "@/lib/theme";

/**
 * The single place providers are composed. The root layout stays a Server
 * Component and mounts only this boundary, so server rendering is preserved for
 * everything that does not need client state.
 *
 * Redux is deliberately absent: the design system's own guidance is to reach for
 * it only when client state is genuinely complex, and this site has none — server
 * state goes through React Query, and the rest is local component state.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
