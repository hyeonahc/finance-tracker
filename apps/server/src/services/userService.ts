import { IUser } from "@interfaces/IUser";
import User from "@models/userModel";

export const createUser = async (input: IUser) => {
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

export default createUser;
