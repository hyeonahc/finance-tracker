import { signupUser } from "@api/signUpUser";
import { IUserSignup } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignupMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSignupData: IUserSignup) => signupUser(userSignupData),
    ...options,
  });
};
