import dayjs, { Dayjs } from "dayjs";
import { DATE_DISPLAY_MODE, DateDisplayMode } from "src/constants/constants";
import { ISavedTransaction } from "src/types/transactions";

export interface FinancialSummary {
  expense: number;
  income: number;
  total: number;
}

export const calculateFinancialSummary = (
  transactions: ISavedTransaction[],
  dateDisplayMode: DateDisplayMode,
  selectedDate: Dayjs,
): FinancialSummary => {
  const filteredTransactions = transactions.filter((transaction) => {
    if (dateDisplayMode === DATE_DISPLAY_MODE.YEAR) {
      return (
        dayjs(transaction.date).format("YYYY") === selectedDate.format("YYYY")
      );
    }
    return (
      dayjs(transaction.date).format("YYYY-MM") ===
      selectedDate.format("YYYY-MM")
    );
  });

  const { expense, income } = filteredTransactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "Income") {
        acc.income += transaction.cost;
      } else if (transaction.type === "Expense") {
        acc.expense += transaction.cost;
      }
      return acc;
    },
    { expense: 0, income: 0 },
  );

  return {
    expense,
    income,
    total: income - expense,
  };
};
