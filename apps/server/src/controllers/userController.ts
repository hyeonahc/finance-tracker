import { createUser, validateUserSignin } from "@services/userService";
import { Request, Response } from "express";

const handleUserSignup = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({
      message: "Sign-up successful",
      ...user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const handleUserSignin = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await validateUserSignin(req.body);
    res.status(200).json({
      message: "Sign-in successful",
      ...user,
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default {
  handleUserSignup,
  handleUserSignin,
};
