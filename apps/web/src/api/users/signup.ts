export interface ISignupRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  // TODO: add googleId type
}

export interface ISignupResponse {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

const API_BASE_URL = import.meta.env.API_BASE_URL;

export const signup = async (
  userSignupData: ISignupRequest,
): Promise<ISignupResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/users/signup`, {
    body: JSON.stringify(userSignupData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  console.log("signup api response: ", response);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};
