import LoadingMessage from "@components/ui/LoadingMessage";
import TransactionCard from "@components/ui/TransactionCard";
import {
  getTxByLatest,
  getTxBySelectedMonth,
  groupTx,
} from "@util/transactionUtils";
import { useEffect, useState } from "react";
import { Transaction } from "src/types/transactions";

interface DailyViewProps {
  isPending: boolean;
  selectedMonth: string; // Format: "YYYY-MM" (e.g., "2024-05")
  transactions: Transaction[];
}

const DailyView = ({
  isPending,
  selectedMonth,
  transactions,
}: DailyViewProps) => {
  const [dailyViewTx, setDailyViewTx] = useState<[string, Transaction[]][]>([]);

  useEffect(() => {
    const filtered = getTxBySelectedMonth(transactions, selectedMonth);
    const sorted = getTxByLatest(filtered);
    const grouped = groupTx(sorted, "date");

    setDailyViewTx(grouped);
  }, [transactions, selectedMonth]);

  if (isPending) {
    return <LoadingMessage />;
  }

  return <TransactionCard groupByDateTxs={dailyViewTx} />;
};

export default DailyView;
