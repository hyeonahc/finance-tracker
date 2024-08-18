import { IUser } from "@interfaces/IUser";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import validator from "validator";

const emailValidator = (email: string): boolean => {
  return validator.isEmail(email);
};

const isValidPassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#\s]{8,}$/;
  return passwordRegex.test(password);
};

const userSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: emailValidator,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: isValidPassword,
      message: (props: { value: string }) =>
        `${props.value} is not a valid password. Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character(@$!%*?&#).`,
    },
  },
  googleId: {
    type: String,
  },
});

// This function runs automatically before a user document is saved to the database.
userSchema.pre("save", async function hashPassword(next) {
  // 'this' refers to the user document that is about to be saved
  // checks if the password has been changed since the last time the user document was saved.
  if (!this.isModified("password")) return next();
  try {
    // Creates a unique random string (salt) with 10 rounds of processing to add to the password for extra security.
    const salt = await bcrypt.genSalt(10);
    // Combines the plain text password with the salt and scrambles it to create a secure, hashed version of the password.
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

export default mongoose.model("User", userSchema);
