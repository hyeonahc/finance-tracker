import { Request } from "express";
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

export interface AuthenticatedRequest extends Request {
  user?: IUserModel;
}

export interface IUserModel extends IUserSignup, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}
