import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        console.error(error);
        if (error && JSON.stringify(error) !== "{}") {
          throw new Error(JSON.stringify(error));
        }
      },
    },
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
