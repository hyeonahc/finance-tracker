import { IApiResponse } from "@interfaces/IApiResponse";
import { IUser } from "@interfaces/IUser";

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

export const signupUser = async (user: IUser): Promise<IApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }
  } catch (error) {
    console.error("Error during sign up:", error);
    return { success: false, error };
  }
};
