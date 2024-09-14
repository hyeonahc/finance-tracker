import { signinApiRequest } from "@api/signinApiRequest";
import { IUserSignin } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSigninMutation = (options = {}) => {
  return useMutation({
    mutationFn: (userSigninData: IUserSignin) =>
      signinApiRequest(userSigninData),
    ...options,
  });
};
