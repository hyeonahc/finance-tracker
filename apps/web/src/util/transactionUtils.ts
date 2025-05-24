import dayjs, { Dayjs } from "dayjs";
import { DateDisplayMode } from "src/constants/monthYearSelector";
import { ISavedTransaction } from "src/types/transactions";

export const filterTxByYear = (
  transactions: ISavedTransaction[],
  year: string,
) => {
  return transactions.filter((tx) => dayjs(tx.date).format("YYYY") === year);
};

export interface FinancialSummary {
  expense: number;
  income: number;
  total: number;
}

export const getFinancialSummary = (
  transactions: ISavedTransaction[],
  dateDisplayMode: DateDisplayMode,
  selectedDate: Dayjs,
  filterByDate: boolean = true,
): FinancialSummary => {
  let filtered = transactions;

  if (filterByDate) {
    const format = dateDisplayMode === "year" ? "YYYY" : "YYYY-MM";
    const target = selectedDate.format(format);

    filtered = transactions.filter(
      (tx) => dayjs(tx.date).format(format) === target,
    );
  }

  let income = 0;
  let expense = 0;

  for (const tx of filtered) {
    if (tx.type === "Income") income += tx.cost;
    if (tx.type === "Expense") expense += tx.cost;
  }

  return {
    income,
    expense,
    total: income - expense,
  };
};
