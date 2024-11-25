import { createTransaction } from "@api/transactions/createTransaction";
import { useMutation } from "@tanstack/react-query";
import { INewTransaction } from "src/types/transactions";

export const useCreateTransaction = (options = {}) => {
  return useMutation({
    mutationFn: (newTransactionData: INewTransaction) =>
      createTransaction(newTransactionData),
    ...options,
  });
};
