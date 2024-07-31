import { create } from "zustand";

interface SignUpState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
}

const useSignUpStore = create<SignUpState>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}));

export default useSignUpStore;
