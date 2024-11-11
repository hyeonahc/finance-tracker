import { ISignupRequest, signup } from "@api/users/signup";
import { useMutation } from "@tanstack/react-query";

export const useSignupMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSignupData: ISignupRequest) => signup(userSignupData),
    ...options,
  });
};
