import { IUserSignin, IUserSignup } from "@interfaces/IUser";
import User from "@models/userModel";

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

    return user.toObject({
      versionKey: false,
      transform: (doc, ret) => {
        const userObject = { ...ret };
        delete userObject.password;
        return userObject;
      },
    });
  } catch (error) {
    throw new Error(`Error signing in: ${error.message}`);
  }
};

export default {
  createUser,
  validateUserSignin,
};
