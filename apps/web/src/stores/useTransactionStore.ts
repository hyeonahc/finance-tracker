import { ISavedTransaction } from "@custom-types/transactions";
import { create } from "zustand";

interface TransactionStore {
  transactions: ISavedTransaction[];
  setTransactions: (transactions: ISavedTransaction[]) => void;
  resetTransactions: () => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  setTransactions: (transactions) => set({ transactions }),
  resetTransactions: () => set({ transactions: [] }),
}));
