import CategoryInput from "@components/ui/CategoryInput";
import CostInput from "@components/ui/CostInput";
import DateInput from "@components/ui/DateInput";
import TopNavigation from "@components/ui/TopNavigation";
import TransactionTypeToggle from "@components/ui/TransactionTypeToggle";
import { Box, Button } from "@mui/material";
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

  const deleteCategory = (categoryToDelete: string) => {
    setCategories(
      categories.filter((category) => category !== categoryToDelete),
    );
  };
  const onClick = () => {
    console.log("onClick");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TopNavigation title="Add Transaction" />
      <TransactionTypeToggle setType={setType} type={type} />
      <DateInput date={date} setDate={setDate} />
      <CostInput cost={cost} setCost={setCost} />
      <CategoryInput
        categories={categories}
        deleteCategory={deleteCategory}
        selectedCategory={selectedCategory}
        updateCategory={updateCategory}
      />
      {/* TODO: Create a note text field component */}
      {/* TODO: Create a csv file upload input component */}
      <Button
        color="primary"
        fullWidth
        onClick={onClick}
        size="large"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
        type="button"
        variant="contained"
      >
        Save
      </Button>
    </Box>
  );
};

export default AddTransaction;
