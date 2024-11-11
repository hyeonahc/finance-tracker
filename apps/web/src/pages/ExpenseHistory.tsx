import ViewOptions from "@components/ViewOptions";
import YearMonthPicker from "@components/YearMonthPicker";
import CalendarView from "@components/views/CalendarView";
import CategoryView from "@components/views/CategoryView";
import DailyView from "@components/views/DailyView";
import MonthlyView from "@components/views/MonthlyView";
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
      <Box mt={2}>
        {selectedView === "daily" && <DailyView />}
        {selectedView === "monthly" && <MonthlyView />}
        {selectedView === "calendar" && <CalendarView />}
        {selectedView === "category" && <CategoryView />}
      </Box>
    </Box>
  );
}
