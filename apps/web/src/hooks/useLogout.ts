// create useLogout hook that calls clearToken from useAuthStore and invalidates the user query

import { queryClient } from "../providers/queryClient";
import { useAuthStore } from "../stores/authStore";

export const useLogout = () => {
  const clearToken = useAuthStore((state) => state.clearToken);
  const clearQueries = () => {
    queryClient.removeQueries();
    queryClient.resetQueries();
  };

  return () => {
    clearToken();
    clearQueries();
  };
};
