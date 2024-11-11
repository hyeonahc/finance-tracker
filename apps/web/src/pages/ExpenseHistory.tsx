import { ITransactionResponse } from "@api/transactions/getAllTransactions";
import YearMonthPicker from "@components/filters/YearMonthPicker";
import IncomeExpenseTotal from "@components/ui/IncomeExpenseTotal";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
import ViewOptions from "@components/views/ViewOptions";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetAllTransactions } from "src/hooks/transactions/useGetAllTransactions";

export default function ExpenseHistory() {
  const [selectedView, setSelectedView] = useState("daily");
  const [financialSummary, setFinancialSummary] = useState({
    expense: 0,
    income: 0,
    total: 0,
  });

  const handleViewChange = (view: string) => {
    setSelectedView(view);
  };

  const onSuccess = (data: ITransactionResponse) => {
    console.log("onSuccess data: ", data);
    const { transactions } = data;
    const { expense, income } = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "Income") {
          acc.income += transaction.amount;
        } else if (transaction.type === "Expense") {
          acc.expense += transaction.amount;
        }
        return acc;
      },
      { expense: 0, income: 0 },
    );
    const total = income - expense;
    setFinancialSummary({
      expense: expense,
      income: income,
      total: total,
    });
  };

  const onError = (data: Error) => {
    console.log("onError data: ", data);
  };

  const { mutate: getAllTransactions } = useGetAllTransactions({
    onError,
    onSuccess,
  });

  const fetchAllTransaction = async () => {
    await getAllTransactions();
  };

  useEffect(() => {
    fetchAllTransaction();
  });

  return (
    <Box>
      <YearMonthPicker displayMode="monthYear" />
      <ViewOptions onViewChange={handleViewChange} />
      <IncomeExpenseTotal
        expense={financialSummary.expense}
        income={financialSummary.income}
        total={financialSummary.total}
      />
      <Box mt={2}>
        {selectedView === "daily" && <DailyView />}
        {selectedView === "monthly" && <MonthlyView />}
        {selectedView === "calendar" && <CalendarView />}
        {selectedView === "category" && <CategoryView />}
      </Box>
    </Box>
  );
}
