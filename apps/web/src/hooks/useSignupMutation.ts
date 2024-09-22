import { signup } from "@api/signup";
import { IUserSignup } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignupMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSignupData: IUserSignup) => signup(userSignupData),
    ...options,
  });
};
