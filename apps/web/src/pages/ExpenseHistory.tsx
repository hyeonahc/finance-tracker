import { ITransactionResponse } from "@api/transactions/getAllTransactions";
import YearMonthPicker from "@components/filters/YearMonthPicker";
import AddTransactionBtn from "@components/ui/AddTransactionBtn";
import IncomeExpenseTotal from "@components/ui/IncomeExpenseTotal";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
import ViewOptions from "@components/views/ViewOptions";
import { DATE_DISPLAY_MODE } from "@constants/constants";
import { EXPENSE_VIEW, EXPENSE_VIEW_ORDER } from "@constants/expenseView";
import { ISavedTransaction } from "@custom-types/transactions";
import { useGetAllTransactions } from "@hooks/transactions/useGetAllTransactions";
import { Box } from "@mui/material";
import { useDateFilterStore } from "@stores/useDateFilterStore";
import { useViewOptionStore } from "@stores/useViewOptionStore";
import { calculateFinancialSummary } from "@util/calculateFinancialSummary";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseHistory = () => {
  const { dateDisplayMode, selectedDate, setDateDisplayMode } =
    useDateFilterStore();
  const { selectedView, setDefaultViews, setSelectedView } =
    useViewOptionStore();

  const [financialSummary, setFinancialSummary] = useState({
    expense: 0,
    income: 0,
    total: 0,
  });
  const [transactions, setTransactions] = useState<ISavedTransaction[]>([]);

  const navigate = useNavigate();

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
    if (selectedView === EXPENSE_VIEW.MONTHLY) {
      setDateDisplayMode(DATE_DISPLAY_MODE.YEAR);
    } else {
      setDateDisplayMode(DATE_DISPLAY_MODE.MONTH);
    }
  }, [selectedView, setDateDisplayMode]);

  useEffect(() => {
    setDefaultViews("expense");
  }, [setDefaultViews]);

  useEffect(() => {
    const fetchAllTransaction = () => {
      getAllTransactions();
    };
    fetchAllTransaction();
  }, [getAllTransactions]);

  useEffect(() => {
    const { expense, income, total } = calculateFinancialSummary(
      transactions,
      dateDisplayMode,
      selectedDate,
    );
    setFinancialSummary({
      expense: expense,
      income: income,
      total: total,
    });
  }, [transactions, dateDisplayMode, selectedDate]);

  return (
    <Box>
      <YearMonthPicker
        dateDisplayMode={dateDisplayMode}
        selectedDate={selectedDate}
      />
      <ViewOptions
        options={EXPENSE_VIEW_ORDER}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      {/* TODO: Ensure the value from the API is displayed immediately when the component first renders, instead of showing initial values */}
      <IncomeExpenseTotal
        expense={financialSummary.expense}
        income={financialSummary.income}
        total={financialSummary.total}
      />
      <Box px={2}>
        {/* TODO: Create a logic omponent to handle logic to pass the view */}
        {selectedView === EXPENSE_VIEW.DAILY && (
          <DailyView
            isPending={isPending}
            selectedMonth={selectedDate.format("YYYY-MM")}
            transactions={transactions}
          />
        )}
        {selectedView === EXPENSE_VIEW.MONTHLY && (
          <MonthlyView
            isPending={isPending}
            selectedYear={selectedDate.format("YYYY")}
            transactions={transactions}
          />
        )}
        {selectedView === EXPENSE_VIEW.CALENDAR && (
          <CalendarView
            selectedMonth={selectedDate.format("YYYY-MM")}
            transactions={transactions}
          />
        )}
        {selectedView === EXPENSE_VIEW.CATEGORY && (
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
