"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui";

interface Props {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Catches render-time errors in the subtree. Route-level failures are handled by
 * app/error.tsx; this is for isolating a single widget so one broken chart does
 * not take down the whole page.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Replace with your error tracker (Sentry, LogRocket, ...).
    console.error("ErrorBoundary caught an error", error, info.componentStack);
  }

  reset = () => this.setState({ error: null });

  render() {
    const { error } = this.state;

    if (!error) return this.props.children;

    if (this.props.fallback) return this.props.fallback(error, this.reset);

    return (
      <div role="alert" className="rounded-card border border-brand-rule bg-brand-white p-6">
        <p className="text-body-m text-brand-ink">Something went wrong.</p>
        <Button variant="navy" className="mt-3" onClick={this.reset}>
          Try again
        </Button>
      </div>
    );
  }
}
