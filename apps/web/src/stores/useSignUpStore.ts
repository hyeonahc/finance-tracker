import { create } from "zustand";

interface SignUpState {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  setConfirmPassword: (confirmPassword: string) => void;
  setEmail: (email: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setPassword: (password: string) => void;
}

const useSignUpStore = create<SignUpState>((set) => ({
  confirmPassword: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setEmail: (email) => set({ email }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setPassword: (password) => set({ password }),
}));

export default useSignUpStore;
