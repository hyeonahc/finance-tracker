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
import { calculateFinancialSummary } from "@util/calculateFinancialSummary";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllTransactions } from "src/hooks/transactions/useGetAllTransactions";
import { ISavedTransaction } from "src/types/transactions";

const DATE_DISPLAY_MODE = {
  MONTH: "month",
  YEAR: "year",
} as const;
type DateDisplayMode =
  (typeof DATE_DISPLAY_MODE)[keyof typeof DATE_DISPLAY_MODE];

const TRANSACTION_VIEW = {
  CALENDAR: "calendar",
  CATEGORY: "category",
  DAILY: "daily",
  MONTHLY: "monthly",
} as const;
export type TransactionView =
  (typeof TRANSACTION_VIEW)[keyof typeof TRANSACTION_VIEW];

const ExpenseHistory = () => {
  const [displayMode, setDisplayMode] = useState<DateDisplayMode>(
    DATE_DISPLAY_MODE.MONTH,
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
      setDisplayMode(DATE_DISPLAY_MODE.YEAR);
    } else {
      setDisplayMode(DATE_DISPLAY_MODE.MONTH);
    }
  }, [selectedView]);

  useEffect(() => {
    const fetchAllTransaction = async () => {
      await getAllTransactions();
    };
    fetchAllTransaction();
  }, [getAllTransactions]);

  useEffect(() => {
    const { expense, income, total } = calculateFinancialSummary(
      transactions,
      displayMode,
      selectedDate,
    );
    setFinancialSummary({
      expense: expense,
      income: income,
      total: total,
    });
  }, [transactions, displayMode, selectedDate]);

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
