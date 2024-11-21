import { ITransaction } from "@interfaces/ITransaction";
import { model, Schema } from "mongoose";

const transactionSchema = new Schema<ITransaction>(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Expense", "Income"],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    cost: {
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
