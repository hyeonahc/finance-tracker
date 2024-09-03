import { signinUser } from "@api/signinUser";
import { ISignUpResponse } from "@interfaces/ISignUpResponse";
import { IUserSignin } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";

export const useSignin = ({
  onSuccess,
}: {
  onSuccess: (data: ISignUpResponse) => void;
}) => {
  const mutation = useMutation({
    mutationFn: (user: IUserSignin) => signinUser(user),
    onSuccess: onSuccess,
  });

  return mutation;
};
