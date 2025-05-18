import YearMonthPicker from "@components/filters/YearMonthPicker";
import ViewOptions from "@components/views/ViewOptions";
import { REPORT_VIEW_ORDER } from "@constants/reportView";
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
        options={REPORT_VIEW_ORDER}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
    </Box>
  );
};

export default AnalysisReport;
