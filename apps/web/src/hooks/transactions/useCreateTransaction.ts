import { createTransaction } from "@api/transactions/createTransaction";
import { useMutation } from "@tanstack/react-query";
import { NewTransaction } from "src/types/transactions";

export const useCreateTransaction = (options = {}) => {
  return useMutation({
    mutationFn: (newTransactionData: NewTransaction) =>
      createTransaction(newTransactionData),
    ...options,
  });
};
