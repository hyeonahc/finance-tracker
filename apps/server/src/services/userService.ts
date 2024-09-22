import { IUserModel, IUserSignin, IUserSignup } from "@interfaces/IUser";
import User from "@models/userModel";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default jwt secret key";

const generateToken = (user: IUserModel) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "1d" },
  );
};

export const createUser = async (input: IUserSignup) => {
  const { email } = input;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const user = new User(input);

    await user.save();

    return user.toObject({
      versionKey: false,
      transform: (doc, ret) => {
        const userObject = { ...ret };
        delete userObject.password;
        return userObject;
      },
    });
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const validateUserSignin = async (input: IUserSignin) => {
  const { email, password } = input;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    const token = generateToken(user);

    return {
      user: user.toObject({
        versionKey: false,
        transform: (doc, ret) => {
          const userObject = { ...ret };
          delete userObject.password;
          return userObject;
        },
      }),
      token,
    };
  } catch (error) {
    throw new Error(`Error signing in: ${error.message}`);
  }
};

export default {
  createUser,
  validateUserSignin,
};
