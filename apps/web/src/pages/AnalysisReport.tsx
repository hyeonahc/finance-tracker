import YearMonthPicker from "@components/filters/YearMonthPicker";
import ViewOptions from "@components/views/ViewOptions";
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
    </Box>
  );
};

export default AnalysisReport;
