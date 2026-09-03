"use client";

import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import type { QuoteRequest } from "@/app/api/quote/route";

export function useSubmitQuote() {
  return useMutation({
    mutationFn: (payload: QuoteRequest) =>
      apiClient.post<{ received: boolean }>("/quote", payload),
  });
}
