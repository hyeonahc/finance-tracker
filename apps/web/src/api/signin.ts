export interface ISigninRequest {
  email: string;
  password: string;
}

export interface ISigninResponse {
  message: string;
  token: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

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
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};
