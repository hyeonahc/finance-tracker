import { signinUser } from "@api/signinUser";
import { ISignupResponse } from "@interfaces/IAuthResponse";
import { IUserSignin } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignin = ({
  onSuccess,
}: {
  onSuccess: (data: ISignupResponse) => void;
}) => {
  const mutation = useMutation({
    mutationFn: (user: IUserSignin) => signinUser(user),
    onSuccess: onSuccess,
  });

  return mutation;
};
