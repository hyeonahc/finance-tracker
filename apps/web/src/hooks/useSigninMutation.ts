import { signin } from "@api/signin";
import { IUserSignin } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSigninMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSigninData: IUserSignin) => signin(userSigninData),
    ...options,
  });
};
