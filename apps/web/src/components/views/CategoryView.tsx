import LoadingMessage from "@components/ui/LoadingMessage";
import TransactionCard from "@components/ui/TransactionCard";
import {
  getTxByLatest,
  getTxBySelectedMonth,
  groupTx,
} from "@util/transactionUtils";
import { useEffect, useState } from "react";
import { Transaction } from "src/types/transactions";

interface CategoryViewProps {
  isPending: boolean;
  selectedMonth: string; // Format: "YYYY-MM" (e.g., "2024-05")
  transactions: Transaction[];
}

const CategoryView = ({
  isPending,
  selectedMonth,
  transactions,
}: CategoryViewProps) => {
  const [categoryViewTx, setCategoryViewTx] = useState<
    [string, Transaction[]][]
  >([]);

  useEffect(() => {
    const filtered = getTxBySelectedMonth(transactions, selectedMonth);
    const sorted = getTxByLatest(filtered);
    const grouped = groupTx(sorted, "category");

    setCategoryViewTx(grouped);
  }, [transactions, selectedMonth]);

  if (isPending) {
    return <LoadingMessage />;
  }

  return <TransactionCard groupByDateTxs={categoryViewTx} />;
};

export default CategoryView;
