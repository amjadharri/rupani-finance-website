"use client";

import { createContext, useContext } from "react";

export interface AgentUser {
  id: string;
  name: string;
  email: string;
  agency?: string;
}

export interface AuthContextValue {
  user: AgentUser | null;
  status: "loading" | "authenticated" | "unauthenticated";
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }

  return context;
}
