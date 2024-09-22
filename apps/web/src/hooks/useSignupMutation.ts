import { ISignupRequest, signup } from "@api/signup";
import { useMutation } from "@tanstack/react-query";

export const useSignupMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSignupData: ISignupRequest) => signup(userSignupData),
    ...options,
  });
};
