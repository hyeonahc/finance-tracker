import { ITransactionResponse } from "@api/transactions/getAllTransactions";
import CategoryInput from "@components/ui/CategoryInput";
import CostInput from "@components/ui/CostInput";
import DateInput from "@components/ui/DateInput";
import TitleInput from "@components/ui/TitleInput";
import TopNavigation from "@components/ui/TopNavigation";
import TransactionTypeToggle from "@components/ui/TransactionTypeToggle";
import { Box, Button } from "@mui/material";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTransaction } from "src/hooks/transactions/useCreateTransaction";
import { useGetAllTransactions } from "src/hooks/transactions/useGetAllTransactions";
import { INewTransaction, ISavedTransaction } from "src/types/transactions";

const AddTransaction = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState<"Expense" | "Income">("Expense");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [cost, setCost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [transactions, setTransactions] = useState<ISavedTransaction[]>([]);

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

  // getAllTransactions
  const getAllTransactionsSuccess = (data: ITransactionResponse) => {
    console.log("getAllTransactionsSuccess data: ", data);
    const { transactions } = data;
    setTransactions(transactions);
  };

  const getAllTransactionsError = (data: Error) => {
    console.log("getAllTransactionsError data: ", data);
  };

  const { mutate: getAllTransactions } = useGetAllTransactions({
    onError: getAllTransactionsError,
    onSuccess: getAllTransactionsSuccess,
  });

  useEffect(() => {
    const fetchAllTransaction = async () => {
      await getAllTransactions();
    };
    fetchAllTransaction();
  }, []);

  useEffect(() => {
    const extractCategories = () => {
      const allCategories = transactions.map(
        (transaction) => transaction.category,
      );
      const uniqueCategories = Array.from(new Set(allCategories));
      setCategories(uniqueCategories);
    };
    if (transactions.length > 0) {
      extractCategories();
    }
  }, [transactions]);

  // createTransaction
  const createTransactionSuccess = (data: ITransactionResponse) => {
    console.log("createTransactionSuccess data: ", data);
    navigate("/expense-history");
  };

  const createTransactionError = (data: Error) => {
    console.log("createTransactionError data: ", data);
  };

  const { mutate: createTransaction } = useCreateTransaction({
    onError: createTransactionError,
    onSuccess: createTransactionSuccess,
  });

  const saveNewTransaction = async () => {
    if (!title) {
      alert("Please enter a title.");
      return;
    }

    if (!date) {
      alert("Please select a date.");
      return;
    }

    if (!cost) {
      alert("Please enter a cost.");
      return;
    }

    if (!selectedCategory) {
      alert("Please select or add a category.");
      return;
    }

    const newTransactionData: INewTransaction = {
      category: selectedCategory,
      cost: Number(cost),
      date: date.toISOString(),
      title: title,
      type: type,
    };

    await createTransaction(newTransactionData);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TopNavigation title="Add Transaction" />
      <TransactionTypeToggle setType={setType} type={type} />
      <TitleInput setTitle={setTitle} title={title} />
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
        onClick={saveNewTransaction}
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
