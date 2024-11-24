export interface ITransaction {
  __v: number;
  _id: string;
  category: string; // Includes emoji and text
  cost: number;
  createdAt: string; // ISO date string
  date: string; // ISO date string
  title: string;
  type: "Expense" | "Income";
  updatedAt: string; // ISO date string
  userId: string;
}
