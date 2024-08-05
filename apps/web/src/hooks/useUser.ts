// src/hooks/useUser.ts
import { useQuery } from "@tanstack/react-query";

import { getUser } from "../api/authApi";
import { useAuthStore } from "../stores/authStore";

export const useUser = () => {
  const token = useAuthStore((state) => state.token);

  const query = useQuery({
    enabled: !!token,
    queryFn: () => getUser(token!),
    queryKey: ["user", token],
  });

  return query;
};
