import { IApiResponse } from "@interfaces/IApiResponse";
import { IUserSignin } from "@interfaces/IUser";

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

export const signinApiRequest = async (
  user: IUserSignin,
): Promise<IApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/signin`, {
      body: JSON.stringify(user),
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
        message: "User signed in successfully",
        success: true,
      };
    } else {
      const errorData = await response.json();
      return {
        error: errorData.error || "An unknown error occurred",
        message: "Sign in failed",
        success: false,
      };
    }
  } catch (error) {
    console.error("Error during sign in:", error);
    return {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
      message: "Sign in failed",
      success: false,
    };
  }
};
