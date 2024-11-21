import { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  title: string;
  type: "Expense" | "Income";
  date: Date;
  cost: number;
  category: string;
  note?: string;
  csv?: string;
  userId: Schema.Types.ObjectId;
}
