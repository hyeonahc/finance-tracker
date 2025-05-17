import YearMonthPicker from "@components/filters/YearMonthPicker";
import { Box } from "@mui/material";
import { useDateFilterStore } from "src/store/useDateFilterStore";

const AnalysisReport = () => {
  const { dateDisplayMode, selectedDate } = useDateFilterStore();

  return (
    <Box>
      <YearMonthPicker
        dateDisplayMode={dateDisplayMode}
        selectedDate={selectedDate}
      />
    </Box>
  );
};

export default AnalysisReport;
