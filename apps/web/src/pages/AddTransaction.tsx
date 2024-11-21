import DateInput from "@components/ui/DateInput";
import TopNavigation from "@components/ui/TopNavigation";
import TransactionTypeToggle from "@components/ui/TransactionTypeToggle";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";

const AddTransaction = () => {
  // TODO: Consider having one state for all the input values
  const [type, setType] = useState<"Expense" | "Income">("Expense");
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TopNavigation title="Add Transaction" />
      <TransactionTypeToggle setType={setType} type={type} />
      <DateInput date={date} setDate={setDate} />
    </Box>
  );
};

export default AddTransaction;
