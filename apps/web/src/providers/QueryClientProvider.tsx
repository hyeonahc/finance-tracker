import { QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

import { queryClient } from "./queryClient";

interface QueryClientProviderProps {
  children: React.ReactNode;
}

// Provide the client to your App
export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
};
