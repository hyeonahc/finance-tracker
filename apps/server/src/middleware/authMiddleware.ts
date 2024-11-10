import { AuthenticatedRequest, IUserModel } from "@interfaces/IUser";
import userModel from "@models/userModel";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as AuthPayload;

    const user = (await userModel.findById(decoded.id)) as IUserModel;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: "..." });
  }
};

export default authMiddleware;
