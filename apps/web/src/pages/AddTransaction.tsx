import CategoryInput from "@components/ui/CategoryInput";
import CostInput from "@components/ui/CostInput";
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
  const [cost, setCost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // TODO: Integrate updateTransactionById API
  const [categories, setCategories] = useState<string[]>([
    "Dining",
    "Groceries",
    "Household",
    "Fitness: yoga",
    "Entertainment Subscriptions",
    "Payroll",
    "Insurance Reimbursement",
  ]);

  const updateCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
    setSelectedCategory(newCategory);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TopNavigation title="Add Transaction" />
      <TransactionTypeToggle setType={setType} type={type} />
      <DateInput date={date} setDate={setDate} />
      <CostInput cost={cost} setCost={setCost} />
      <CategoryInput
        categories={categories}
        selectedCategory={selectedCategory}
        updateCategory={updateCategory}
      />
    </Box>
  );
};

export default AddTransaction;
