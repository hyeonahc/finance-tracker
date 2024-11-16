import {
  ITransaction,
  ITransactionResponse,
} from "@api/transactions/getAllTransactions";
import YearMonthPicker from "@components/filters/YearMonthPicker";
import IncomeExpenseTotal from "@components/ui/IncomeExpenseTotal";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
import ViewOptions from "@components/views/ViewOptions";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useGetAllTransactions } from "src/hooks/transactions/useGetAllTransactions";

const ExpenseHistory = () => {
  // TODO: Consider managing selectedDate in Zustand
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedView, setSelectedView] = useState("daily");
  const [financialSummary, setFinancialSummary] = useState({
    expense: 0,
    income: 0,
    total: 0,
  });
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const handleViewChange = (view: string) => {
    setSelectedView(view);
  };

  const onSuccess = (data: ITransactionResponse) => {
    console.log("onSuccess data: ", data);
    const { transactions } = data;
    setTransactions(transactions);
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

  const { isPending, mutate: getAllTransactions } = useGetAllTransactions({
    onError,
    onSuccess,
  });

  const fetchAllTransaction = async () => {
    await getAllTransactions();
  };

  // TODO: Think about what's the best timing to call getAllTransactions data
  useEffect(() => {
    fetchAllTransaction();
  }, []);

  return (
    <Box>
      <YearMonthPicker
        displayMode="monthYear"
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ViewOptions onViewChange={handleViewChange} />
      {/* TODO: Ensure the value from the API is displayed immediately when the component first renders, instead of showing initial values */}
      <IncomeExpenseTotal
        expense={financialSummary.expense}
        income={financialSummary.income}
        total={financialSummary.total}
      />
      {/* TODO: Update selectedMonth with real data */}
      <Box px={2}>
        {selectedView === "daily" && (
          <DailyView
            isPending={isPending}
            selectedMonth={selectedDate.format("YYYY-MM")}
            transactions={transactions}
          />
        )}
        {selectedView === "monthly" && <MonthlyView />}
        {selectedView === "calendar" && <CalendarView />}
        {selectedView === "category" && <CategoryView />}
      </Box>
    </Box>
  );
};

export default ExpenseHistory;
