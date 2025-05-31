import { ITransactionResponse } from "@api/transactions/getAllTransactions";
import YearMonthPicker from "@components/filters/YearMonthPicker";
import CashFlowView from "@components/views/analysisReport/CashFlowView";
import ExpenseBreakdownView from "@components/views/analysisReport/ExpenseBreakdownView";
import NetWorthView from "@components/views/analysisReport/NetWorthView";
import SavingsRateView from "@components/views/analysisReport/SavingsRateView";
import SubscriptionsView from "@components/views/analysisReport/SubscriptionsView";
import ViewOptions from "@components/views/dateViewSelector";
import { DATE_DISPLAY_MODE } from "@constants/monthYearSelector";
import { REPORT_VIEW } from "@constants/reportView";
import {
  AllTxSummary,
  MonthlyTxSummary,
  YearlyTxSummary,
} from "@custom-types/transactions";
import { useGetAllTransactions } from "@hooks/transactions/useGetAllTransactions";
import { Box } from "@mui/material";
import { useDateFilterStore } from "@stores/useDateFilterStore";
import { useTransactionStore } from "@stores/useTransactionStore";
import { useViewOptionStore } from "@stores/useViewOptionStore";
import {
  getAllTx,
  getTxByYear,
  getTxByYearMonth,
} from "@util/transactionUtils";
import { useEffect, useState } from "react";

const AnalysisReport = () => {
  const { dateDisplayMode, selectedDate, setDateDisplayMode } =
    useDateFilterStore();
  const { selectedView, setDefaultViews, setSelectedView } =
    useViewOptionStore();
  const { setTransactions, transactions } = useTransactionStore();

  const [allTxSummary, setAllTxSummary] = useState<AllTxSummary>({
    expense: 0,
    income: 0,
    total: 0,
  });
  const [yearlyTxSummary, setYearlyTxSummary] = useState<YearlyTxSummary>({});
  const [monthlyTxSummary, setMonthlyTxSummary] = useState<MonthlyTxSummary>(
    {},
  );

  useEffect(() => {
    setDefaultViews("report");
  }, [setDefaultViews]);

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

  useEffect(() => {
    const fetchAllTransaction = () => {
      getAllTransactions();
    };
    fetchAllTransaction();
  }, [getAllTransactions]);

  useEffect(() => {
    if (selectedView === REPORT_VIEW.NET_WORTH) {
      setDateDisplayMode(DATE_DISPLAY_MODE.YEAR);
    } else {
      setDateDisplayMode(DATE_DISPLAY_MODE.MONTH);
    }
  }, [selectedView, setDateDisplayMode]);

  useEffect(() => {
    setAllTxSummary(getAllTx(transactions));
    setYearlyTxSummary(getTxByYear(transactions));
    setMonthlyTxSummary(getTxByYearMonth(transactions));
  }, [transactions]);

  return (
    <Box>
      <YearMonthPicker
        dateDisplayMode={dateDisplayMode}
        selectedDate={selectedDate}
      />
      <ViewOptions
        options={Object.values(REPORT_VIEW)}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      <Box px={2}>
        {selectedView === REPORT_VIEW.NET_WORTH && (
          <NetWorthView allTxSummary={allTxSummary} isPending={isPending} />
        )}
        {selectedView === REPORT_VIEW.SUBSCRIPTIONS && <SubscriptionsView />}
        {selectedView === REPORT_VIEW.EXPENSE_BREAKDOWN && (
          <ExpenseBreakdownView />
        )}
        {selectedView === REPORT_VIEW.CASH_FLOW && <CashFlowView />}
        {selectedView === REPORT_VIEW.SAVINGS_RATE && <SavingsRateView />}
      </Box>
    </Box>
  );
};

export default AnalysisReport;
