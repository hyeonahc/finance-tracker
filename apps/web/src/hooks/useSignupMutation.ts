import { signupApiRequest } from "@api/signupApiRequest";
import { IUserSignup } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignupMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSignupData: IUserSignup) =>
      signupApiRequest(userSignupData),
    ...options,
  });
};
