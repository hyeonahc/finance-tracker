interface SignupSuccessResponse {
  message: string;
  success: true;
  user: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface SigninSuccessResponse {
  message: string;
  success: true;
  token: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface AuthErrorResponse {
  message: string;
  success: false;
}

export type ISignupResponse = AuthErrorResponse | SignupSuccessResponse;
export type ISigninResponse = AuthErrorResponse | SigninSuccessResponse;
