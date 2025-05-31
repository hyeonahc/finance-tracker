import { ITransactionResponse } from "@api/transactions/getAllTransactions";
import YearMonthPicker from "@components/filters/YearMonthPicker";
import AddTransactionBtn from "@components/ui/AddTransactionBtn";
import IncomeExpenseTotal from "@components/ui/IncomeExpenseTotal";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
import ViewOptions from "@components/views/dateViewSelector";
import { EXPENSE_VIEW } from "@constants/expenseView";
import { DATE_DISPLAY_MODE } from "@constants/monthYearSelector";
import { useGetAllTransactions } from "@hooks/transactions/useGetAllTransactions";
import { Box } from "@mui/material";
import { useDateFilterStore } from "@stores/useDateFilterStore";
import { useTransactionStore } from "@stores/useTransactionStore";
import { useViewOptionStore } from "@stores/useViewOptionStore";
import { getFinancialSummary } from "@util/transactionUtils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseHistory = () => {
  const { dateDisplayMode, selectedDate, setDateDisplayMode } =
    useDateFilterStore();
  const { selectedView, setDefaultViews, setSelectedView } =
    useViewOptionStore();
  const { setTransactions, transactions } = useTransactionStore();

  const [filteredFinancialSummary, setFilteredFinancialSummary] = useState({
    expense: 0,
    income: 0,
    total: 0,
  });

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
    const { expense, income, total } = getFinancialSummary(
      transactions,
      dateDisplayMode,
      selectedDate,
    );
    setFilteredFinancialSummary({
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
        options={Object.values(EXPENSE_VIEW)}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      {/* TODO: Ensure the value from the API is displayed immediately when the component first renders, instead of showing initial values */}
      <IncomeExpenseTotal
        expense={filteredFinancialSummary.expense}
        income={filteredFinancialSummary.income}
        total={filteredFinancialSummary.total}
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
