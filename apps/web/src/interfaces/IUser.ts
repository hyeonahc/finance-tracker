export interface IUserSignup {
  email: string;
  firstName: string;
  googleId?: string;
  lastName: string;
  password: string;
}

export interface IUserSignin {
  email: string;
  password: string;
}
