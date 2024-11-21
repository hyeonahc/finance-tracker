import DateInput from "@components/ui/DateInput";
import TopNavigation from "@components/ui/TopNavigation";
import TransactionTypeToggle from "@components/ui/TransactionTypeToggle";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";

const AddTransaction = () => {
  // TODO: Consider having one state for all the input values
  const [type, setType] = useState<"Expense" | "Income">("Expense");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const changeSelectedDate = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TopNavigation title="Add Transaction" />
      <TransactionTypeToggle changeType={setType} type={type} />
      <DateInput changeDate={changeSelectedDate} selectedDate={selectedDate} />
    </Box>
  );
};

export default AddTransaction;
