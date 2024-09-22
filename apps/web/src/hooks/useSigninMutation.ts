import { ISigninRequest, signin } from "@api/signin";
import { useMutation } from "@tanstack/react-query";

export const useSigninMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSigninData: ISigninRequest) => signin(userSigninData),
    ...options,
  });
};
