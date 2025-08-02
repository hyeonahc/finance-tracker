import { Transaction } from "@custom-types/transactions";
import { create } from "zustand";

interface TransactionStore {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  resetTransactions: () => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  setTransactions: (transactions) => set({ transactions }),
  resetTransactions: () => set({ transactions: [] }),
}));
