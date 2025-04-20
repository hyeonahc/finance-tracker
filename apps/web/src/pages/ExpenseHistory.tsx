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
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllTransactions } from "src/hooks/transactions/useGetAllTransactions";
import { ISavedTransaction } from "src/types/transactions";

const DISPLAY_MODE_OPTION = {
  MONTH: "month",
  YEAR: "year",
} as const;
type DisplayMode =
  (typeof DISPLAY_MODE_OPTION)[keyof typeof DISPLAY_MODE_OPTION];

const TRANSACTION_VIEW = {
  CALENDAR: "calendar",
  CATEGORY: "category",
  DAILY: "daily",
  MONTHLY: "monthly",
} as const;
export type TransactionView =
  (typeof TRANSACTION_VIEW)[keyof typeof TRANSACTION_VIEW];

const ExpenseHistory = () => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DISPLAY_MODE_OPTION.MONTH,
  );
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedView, setSelectedView] = useState<TransactionView>(
    TRANSACTION_VIEW.DAILY,
  );
  const [financialSummary, setFinancialSummary] = useState({
    expense: 0,
    income: 0,
    total: 0,
  });
  const [transactions, setTransactions] = useState<ISavedTransaction[]>([]);

  const navigate = useNavigate();

  const handleViewChange = (view: TransactionView) => {
    setSelectedView(view);
  };

  // TODO: Create a util function for updateFinancialSummary
  const updateFinancialSummary = useCallback(() => {
    const currentMonthTransactions = transactions.filter((transaction) => {
      if (displayMode === DISPLAY_MODE_OPTION.YEAR) {
        return (
          dayjs(transaction.date).format("YYYY") === selectedDate.format("YYYY")
        );
      }
      return (
        dayjs(transaction.date).format("YYYY-MM") ===
        selectedDate.format("YYYY-MM")
      );
    });

    // TODO: Combine with updateFinancialSummary function
    const { expense, income } = currentMonthTransactions.reduce(
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

    setFinancialSummary({
      expense: expense,
      income: income,
      total: income - expense,
    });
  }, [displayMode, selectedDate, transactions]);

  const { isPending, mutate: getAllTransactions } = useGetAllTransactions({
    onError: (error: Error) => {
      console.log("getAllTransactions onError data: ", error);
    },
    onSuccess: (data: ITransactionResponse) => {
      console.log("getAllTransactions onSuccess data: ", data);
      const { transactions } = data;
      setTransactions(transactions);
    },
  });

  const goToAddTransactionPage = () => {
    navigate("/add-transaction");
  };

  useEffect(() => {
    if (selectedView === TRANSACTION_VIEW.MONTHLY) {
      setDisplayMode(DISPLAY_MODE_OPTION.YEAR);
    } else {
      setDisplayMode(DISPLAY_MODE_OPTION.MONTH);
    }
  }, [selectedView]);

  useEffect(() => {
    const fetchAllTransaction = async () => {
      await getAllTransactions();
    };
    fetchAllTransaction();
  }, [getAllTransactions]);

  useEffect(() => {
    updateFinancialSummary();
  }, [updateFinancialSummary]);

  return (
    <Box>
      <YearMonthPicker
        displayMode={displayMode}
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
        {selectedView === TRANSACTION_VIEW.DAILY && (
          <DailyView
            isPending={isPending}
            selectedMonth={selectedDate.format("YYYY-MM")}
            transactions={transactions}
          />
        )}
        {selectedView === TRANSACTION_VIEW.MONTHLY && (
          <MonthlyView
            isPending={isPending}
            selectedYear={selectedDate.format("YYYY")}
            transactions={transactions}
          />
        )}
        {selectedView === TRANSACTION_VIEW.CALENDAR && (
          <CalendarView
            selectedMonth={selectedDate.format("YYYY-MM")}
            transactions={transactions}
          />
        )}
        {selectedView === TRANSACTION_VIEW.CATEGORY && (
          <CategoryView
            isPending={isPending}
            selectedMonth={selectedDate.format("YYYY-MM")}
            transactions={transactions}
          />
        )}
      </Box>
      <AddTransactionBtn onClick={goToAddTransactionPage} />
    </Box>
  );
};

export default ExpenseHistory;
