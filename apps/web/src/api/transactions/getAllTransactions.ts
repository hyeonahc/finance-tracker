export interface ITransactionResponse {
  message: string;
  transactions: Array<ITransaction>;
}

export interface ITransaction {
  _id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  type: "Expense" | "Income";
  userId: string;
}

const API_BASE_URL = import.meta.env.VITE_API_LOCAL_8080;

export const getAllTransactions = async (): Promise<ITransactionResponse> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/api/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  console.log("getAllTransactions api response: ", response);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};
