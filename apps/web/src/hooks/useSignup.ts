import { signupUser } from "@api/signUpUser";
import { ISignupResponse } from "@interfaces/IAuthResponse";
import { IUserSignup } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignup = ({
  onSuccess,
}: {
  onSuccess: (data: ISignupResponse) => void;
}) => {
  const mutation = useMutation({
    mutationFn: (user: IUserSignup) => signupUser(user),
    onSuccess: onSuccess,
  });

  return mutation;
};
