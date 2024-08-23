interface SignUpSuccessResponse {
  data: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  success: true;
}

interface SignUpErrorResponse {
  error: {
    error: string;
  };
  success: false;
}

export type ISignUpResponse = SignUpErrorResponse | SignUpSuccessResponse;
