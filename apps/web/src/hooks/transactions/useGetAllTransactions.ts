import { getAllTransactions } from "@api/transactions/getAllTransactions";
import { useMutation } from "@tanstack/react-query";

export const useGetAllTransactions = (options = {}) => {
  return useMutation({
    mutationFn: () => getAllTransactions(),
    ...options,
  });
};
