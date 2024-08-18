import { signupUser } from "@api/signUpUser";
import { IUser } from "@interfaces/IUser";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// onSuccess: Deprecated - this callback will be removed in the next major version
// https://tanstack.com/query/v4/docs/framework/react/reference/useQuery
// https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
export const useSignup = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (user: IUser) => signupUser(user),
    onError: (error) => {
      console.error("Sign up error:", error);
      alert("An error occurred during sign up. Please try again.");
    },
    onSuccess: (data) => {
      if (data.success) {
        console.log("User signed up successfully:", data);
        alert("Sign up successful!");
        navigate("/signin");
      } else {
        console.log("User signed up unsuccessfully:", data);
        alert(data.error.error);
      }
    },
  });

  return mutation;
};
