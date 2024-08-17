import { IApiResponse } from "@interfaces/IApiResponse";
import { IUser } from "@interfaces/IUser";

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

export const signupUser = async (user: IUser): Promise<IApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/signup`, {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      return { data, success: true };
    } else {
      const errorData = await response.json();
      return { error: errorData, success: false };
    }
  } catch (error) {
    console.error("Error during sign up:", error);
    return { error, success: false };
  }
};
