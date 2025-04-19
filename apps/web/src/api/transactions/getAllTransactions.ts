import { ISavedTransaction } from "src/types/transactions";

export interface ITransactionResponse {
  message: string;
  transactions: Array<ISavedTransaction>;
}

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllTransactions = async (): Promise<ITransactionResponse> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${VITE_API_BASE_URL}/api/transactions`, {
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
