import YearMonthPicker from "@components/filters/YearMonthPicker";
import ViewOptions from "@components/views/ViewOptions";
import CashFlowView from "@components/views/analysisReport/CashFlowView";
import ExpenseBreakdownView from "@components/views/analysisReport/ExpenseBreakdownView";
import NetWorthView from "@components/views/analysisReport/NetWorthView";
import SavingsRateView from "@components/views/analysisReport/SavingsRateView";
import SubscriptionsView from "@components/views/analysisReport/SubscriptionsView";
import { REPORT_VIEW } from "@constants/reportView";
import { Box } from "@mui/material";
import { useDateFilterStore } from "@stores/useDateFilterStore";
import { useViewOptionStore } from "@stores/useViewOptionStore";
import { useEffect } from "react";

const AnalysisReport = () => {
  const { dateDisplayMode, selectedDate } = useDateFilterStore();
  const { selectedView, setDefaultViews, setSelectedView } =
    useViewOptionStore();

  useEffect(() => {
    setDefaultViews("report");
  }, [setDefaultViews]);

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
        {selectedView === REPORT_VIEW.NET_WORTH && <NetWorthView />}
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
