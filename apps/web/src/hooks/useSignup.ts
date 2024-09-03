import { signupUser } from "@api/signUpUser";
import { ISignUpResponse } from "@interfaces/ISignUpResponse";
import { IUserSignup } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignup = ({
  onSuccess,
}: {
  onSuccess: (data: ISignUpResponse) => void;
}) => {
  const mutation = useMutation({
    mutationFn: (user: IUserSignup) => signupUser(user),
    onSuccess: onSuccess,
  });

  return mutation;
};
