import { INewTransaction, ISavedTransaction } from "src/types/transactions";

export interface ITransactionResponse {
  message: string;
  transaction: ISavedTransaction;
}

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createTransaction = async (
  newTransactionData: Partial<INewTransaction>,
): Promise<ITransactionResponse> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${VITE_API_BASE_URL}/api/transactions`, {
    body: JSON.stringify(newTransactionData),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  console.log("createTransaction api response: ", response);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const responseData = await response.json();
  return responseData;
};
