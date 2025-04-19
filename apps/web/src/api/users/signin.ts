export interface ISigninRequest {
  email: string;
  password: string;
}

export interface ISigninResponse {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  token: string;
}

const API_BASE_URL = import.meta.env.API_BASE_URL;

export const signin = async (
  userSigninData: ISigninRequest,
): Promise<ISigninResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/users/signin`, {
    body: JSON.stringify(userSigninData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  console.log("signin api response: ", response);

  if (!response.ok) {
    let errorMessage = "Unknown error";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (err) {
      console.error("Failed to parse error response:", err);
    }
    throw new Error(errorMessage);
  }

  const responseData = await response.json();
  return responseData;
};
