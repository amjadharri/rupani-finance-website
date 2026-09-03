"use client";

import { useEffect } from "react";
import { Button, Container, Heading } from "@/components/ui";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Forward to your error tracker here.
    console.error(error);
  }, [error]);

  return (
    <Container className="py-24 md:py-32">
      <div role="alert">
        <Heading level={1}>Something went wrong</Heading>
        <p className="mt-6 max-w-[520px] text-body-m text-brand-ink-2">
          The page failed to load. You can retry, or call us on (713) 777-6786.
        </p>
        <Button className="mt-10" onClick={reset}>
          Try again
        </Button>
      </div>
    </Container>
  );
}
