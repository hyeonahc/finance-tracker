import { useAuthStore } from "../stores/authStore";

export const useToken = () => {
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);

  return {
    setToken,
    token,
  };
};

export const useAuth = () => {
  const { isLoggedIn, setToken } = useAuthStore();

  return {
    isLoggedIn,
    setToken,
  };
};
