import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthStore = {
  // initialized: boolean;
  token: null | string;
};

export type AuthActions = {
  // isAuthorized: () => Promise<boolean>;
  // onLogin: (email: string, password: string) => Promise<unknown>;
  // onLogout: () => Promise<void>;
  // onRegister: (email: string, password: string) => Promise<unknown>;
  clearToken: () => void;
  setToken: (token: string) => void;
};

export const useAuthStore = create<AuthActions & AuthStore>()(
  persist(
    (set) => ({
      // initialized: false,
      // isAuthorized: async () => {
      //   if (!get().initialized) return false;
      //   // todo: implement token validation
      //   // return await api.validateToken(get().token);
      //   return true;
      // },
      // onLogin: async (email, password) => {
      //   console.log("login", email, password);
      //   // todo: implement login
      //   const token = "some value";
      //   // set initialized to true
      //   set({ initialized: true, token: token });
      // },
      // onLogout: async () => {
      //   console.log("logout");
      //   set({ initialized: false, token: null });
      // },
      // onRegister: async (email, password) => {
      //   console.log("register", email, password);
      // },
      clearToken: () => set({ token: null }),
      setToken: (token) => {
        set({ token });
      },
      token: null,
    }),
    { name: "token", storage: createJSONStorage(() => localStorage) }
  )
);
