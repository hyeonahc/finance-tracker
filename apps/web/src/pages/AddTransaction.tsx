import TopNavigation from "@components/ui/TopNavigation";
import TransactionTypeToggle from "@components/ui/TransactionTypeToggle";
import { Box } from "@mui/material";
import { useState } from "react";

const AddTransaction = () => {
  const [type, setType] = useState<"Expense" | "Income">("Expense");

  return (
    <Box>
      <TopNavigation title="Add Transaction" />
      <TransactionTypeToggle changeType={setType} type={type} />
    </Box>
  );
};

export default AddTransaction;
