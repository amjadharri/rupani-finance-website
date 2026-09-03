"use client";

import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import { ThemeContext, type Theme, type ThemeContextValue } from "./theme-context";

const STORAGE_KEY = "rupani-theme";

const listeners = new Set<() => void>();

/** Fallback when localStorage is unavailable, so the toggle still works for the session. */
let memoryTheme: Theme | null = null;

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  // Keep tabs in sync when the preference changes elsewhere.
  window.addEventListener("storage", onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function readTheme(): Theme {
  try {
    return (window.localStorage.getItem(STORAGE_KEY) as Theme | null) ?? memoryTheme ?? "system";
  } catch {
    // Storage throws in some privacy modes.
    return memoryTheme ?? "system";
  }
}

/** The server has no storage, so it always renders the neutral default. */
function readServerTheme(): Theme {
  return "system";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // localStorage is an external store; subscribing to it avoids the
  // render → effect → setState cascade a useState/useEffect pair would cause.
  const theme = useSyncExternalStore(subscribe, readTheme, readServerTheme);

  useEffect(() => {
    const resolved =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.documentElement.dataset.theme = resolved;
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    memoryTheme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Non-fatal: memoryTheme keeps the choice for this session.
    }
    emit();
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
