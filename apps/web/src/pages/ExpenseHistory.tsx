import { ITransactionResponse } from "@api/transactions/getAllTransactions";
import YearMonthPicker from "@components/filters/YearMonthPicker";
import AddTransactionBtn from "@components/ui/AddTransactionBtn";
import IncomeExpenseTotal from "@components/ui/IncomeExpenseTotal";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
import ViewOptions from "@components/views/ViewOptions";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllTransactions } from "src/hooks/transactions/useGetAllTransactions";
import { ISavedTransaction } from "src/types/transactions";

const VIEW_OPTIONS = ["daily", "monthly", "calendar", "category"] as const;
export type ViewOption = (typeof VIEW_OPTIONS)[number];

const ExpenseHistory = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedView, setSelectedView] = useState<ViewOption>("daily");
  const [financialSummary, setFinancialSummary] = useState({
    expense: 0,
    income: 0,
    total: 0,
  });
  const [transactions, setTransactions] = useState<ISavedTransaction[]>([]);

  const navigate = useNavigate();

  const handleViewChange = (view: ViewOption) => {
    setSelectedView(view);
  };

  const onSuccess = (data: ITransactionResponse) => {
    console.log("onSuccess data: ", data);
    const { transactions } = data;
    setTransactions(transactions);
    const { expense, income } = transactions.reduce(
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

  const goToAddTransactionPage = () => {
    navigate("/add-transaction");
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
      <ViewOptions
        onViewChange={handleViewChange}
        selectedView={selectedView}
      />
      {/* TODO: Ensure the value from the API is displayed immediately when the component first renders, instead of showing initial values */}
      <IncomeExpenseTotal
        expense={financialSummary.expense}
        income={financialSummary.income}
        total={financialSummary.total}
      />
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
      <AddTransactionBtn onClick={goToAddTransactionPage} />
    </Box>
  );
};

export default ExpenseHistory;
