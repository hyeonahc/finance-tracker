interface SignupSuccessResponse {
  data: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  success: true;
}

interface SigninSuccessResponse {
  data: {
    message: string;
    token: string;
    user: {
      _id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
  success: true;
}

interface AuthErrorResponse {
  error: {
    error: string;
  };
  success: false;
}

export type ISignupResponse = AuthErrorResponse | SignupSuccessResponse;
export type ISigninResponse = AuthErrorResponse | SigninSuccessResponse;
