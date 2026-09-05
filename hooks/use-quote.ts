"use client";

import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import type { QuoteRequest, QuoteResponse } from "@/lib/api/quote";

export function useSubmitQuote() {
  return useMutation({
    mutationFn: (payload: QuoteRequest) =>
      apiClient.post<QuoteResponse>("/quote", payload),
  });
}
