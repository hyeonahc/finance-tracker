import transactionRouter from "@routers/transactionRouter";
import userRouter from "@routers/userRouter";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  try {
    console.log("Connecting to the database...");
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@finance-tracker.m1v3yfi.mongodb.net/?retryWrites=true&w=majority&appName=finance-tracker`,
    );
    console.log("Database connection established");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use(cors());
app.use(express.json());

const routers = [userRouter, transactionRouter];
routers.forEach((router) => app.use("/api", router));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
