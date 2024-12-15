// Interface for creating a new transaction (request payload)
export interface INewTransaction {
  category: string;
  cost: number;
  date: string;
  title: string;
  type: "Expense" | "Income";
}

// Interface for a transaction object returned from the server (response payload)
export interface ISavedTransaction {
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
