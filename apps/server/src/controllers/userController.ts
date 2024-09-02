import { createUser, validateUserSignin } from "@services/userService";
import { Request, Response } from "express";

const handleUserSignup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await createUser({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleUserSignin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { user, token } = await validateUserSignin({ email, password });
    res.status(200).json({
      message: "Sign-in successful",
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default {
  handleUserSignup,
  handleUserSignin,
};
