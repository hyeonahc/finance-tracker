import YearMonthPicker from "@components/YearMonthPicker";
import { Box } from "@mui/material";

export default function ExpenseHistory() {
  return (
    <Box>
      <YearMonthPicker displayMode="monthYear" />
    </Box>
  );
}
