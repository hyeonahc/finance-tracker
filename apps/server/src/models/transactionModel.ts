import { ITransaction } from "@interfaces/ITransaction";
import { model, Schema } from "mongoose";

// TODO: transaction title & emoji should be included
const transactionSchema = new Schema<ITransaction>(
  {
    type: {
      type: String,
      enum: ["Expense", "Income"],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    csv: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export default model("Transaction", transactionSchema);
