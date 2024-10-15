import { IUserModel } from "../../interfaces/IUser";

declare global {
  namespace Express {
    interface Request {
      user?: IUserModel;
    }
  }
}
