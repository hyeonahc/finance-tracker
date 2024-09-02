import { Document } from "mongoose";

export interface IUserSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  googleId?: string;
}

export interface IUserSignin {
  email: string;
  password: string;
}

export interface IUserModel extends IUserSignup, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}
