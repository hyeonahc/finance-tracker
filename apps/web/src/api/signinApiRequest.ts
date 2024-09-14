import { ISigninResponse } from "@interfaces/IAuthResponse";
import { IUserSignin } from "@interfaces/IUser";

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

export const signinApiRequest = async (
  user: IUserSignin,
): Promise<ISigninResponse> => {
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
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    return {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
      success: false,
    };
  }
};
