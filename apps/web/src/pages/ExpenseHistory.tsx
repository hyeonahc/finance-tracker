import YearMonthPicker from "@components/filters/YearMonthPicker";
import IncomeExpenseTotal from "@components/ui/IncomeExpenseTotal";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
import ViewOptions from "@components/views/ViewOptions";
import { Box } from "@mui/material";
import { useState } from "react";

export default function ExpenseHistory() {
  const [selectedView, setSelectedView] = useState("daily");

  const handleViewChange = (view: string) => {
    setSelectedView(view);
  };

  return (
    <Box>
      <YearMonthPicker displayMode="monthYear" />
      <ViewOptions onViewChange={handleViewChange} />
      <IncomeExpenseTotal expense={1237} income={5500} total={4263} />
      <Box mt={2}>
        {selectedView === "daily" && <DailyView />}
        {selectedView === "monthly" && <MonthlyView />}
        {selectedView === "calendar" && <CalendarView />}
        {selectedView === "category" && <CategoryView />}
      </Box>
    </Box>
  );
}
