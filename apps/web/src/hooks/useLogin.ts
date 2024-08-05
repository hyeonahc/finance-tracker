// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";

import { login } from "../api/authApi";
import { useAuthStore } from "../stores/authStore";

export const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: (data) => {
      setToken(data.token);
    },
  });

  return mutation;
};
