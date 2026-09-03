"use client";

import { useCallback, useMemo, useState } from "react";
import { apiClient } from "@/lib/api";
import { AuthContext, type AgentUser, type AuthContextValue } from "./auth-context";

interface AuthProviderProps {
  children: React.ReactNode;
  /** Hydrated from the server so the first paint is not a loading state. */
  initialUser?: AgentUser | null;
}

/** Backs the Agent Login area. No auth backend is wired up yet. */
export function AuthProvider({ children, initialUser = null }: AuthProviderProps) {
  const [user, setUser] = useState<AgentUser | null>(initialUser);
  const [status, setStatus] = useState<AuthContextValue["status"]>(
    initialUser ? "authenticated" : "unauthenticated",
  );

  const signIn = useCallback(async (email: string, password: string) => {
    setStatus("loading");

    try {
      const signedIn = await apiClient.post<AgentUser>("/auth/sign-in", { email, password });
      setUser(signedIn);
      setStatus("authenticated");
    } catch (error) {
      setUser(null);
      setStatus("unauthenticated");
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    await apiClient.post("/auth/sign-out");
    setUser(null);
    setStatus("unauthenticated");
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, status, signIn, signOut }),
    [user, status, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
