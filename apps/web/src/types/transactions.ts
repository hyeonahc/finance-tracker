// Interface for creating a new transaction (request payload)
export interface NewTransaction {
  category: string;
  cost: number;
  date: string;
  title: string;
  type: "Expense" | "Income";
}

// Interface for a transaction object returned from the server (response payload)
export interface Transaction {
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

// TODO: use extends
export type AllTxSummary = {
  expense: number;
  income: number;
  total: number;
};

export type YearlyTxSummary = {
  [year: string]: {
    expense: number;
    income: number;
    total: number;
  };
};

export type MonthlyTxSummary = {
  [year: string]: {
    [month: string]: {
      expense: number;
      income: number;
      total: number;
    };
  };
};
