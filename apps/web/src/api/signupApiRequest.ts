import { IApiResponse } from "@interfaces/IApiResponse";
import { IUserSignup } from "@interfaces/IUser";

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

export const signupApiRequest = async (
  userSignupData: IUserSignup,
): Promise<IApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/signup`, {
      body: JSON.stringify(userSignupData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log("response: ", response);

    if (response.ok) {
      const data = await response.json();
      return {
        data: data,
        message: "User signed up successfully",
        success: true,
      };
    } else {
      const errorData = await response.json();
      return {
        error: errorData.error || "An unknown error occurred",
        message: "Sign up failed",
        success: false,
      };
    }
  } catch (error) {
    console.error("Error during sign up:", error);
    return {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
      message: "Sign up failed",
      success: false,
    };
  }
};
