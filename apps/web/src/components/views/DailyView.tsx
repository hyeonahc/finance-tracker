import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

interface Transaction {
  _id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  type: "Expense" | "Income";
}

interface DailyViewProps {
  selectedMonth: string; // Format: "YYYY-MM" (e.g., "2024-05")
}

const DailyView = ({ selectedMonth }: DailyViewProps) => {
  const theme = useTheme();

  // TODO: Update transactions with real data
  // Mock data for transactions
  const [transactions] = useState<Transaction[]>([
    {
      _id: "6737a8523098b177484dba44",
      amount: 22.09,
      category: "Dining",
      date: "2024-05-31T00:00:00.000Z",
      type: "Expense",
    },
    {
      _id: "6737a8743098b177484dba49",
      amount: 8.58,
      category: "Treats",
      date: "2024-05-30T00:00:00.000Z",
      type: "Expense",
    },
    {
      _id: "6737a8963098b177484dba55",
      amount: 122.04,
      category: "Fitness: yoga",
      date: "2024-05-30T00:00:00.000Z",
      type: "Expense",
    },
    {
      _id: "6737a8a73098b177484dba58",
      amount: 5.64,
      category: "Household",
      date: "2024-05-30T00:00:00.000Z",
      type: "Expense",
    },
    {
      _id: "6737a8b43098b177484dba5b",
      amount: 15.77,
      category: "Household",
      date: "2024-05-30T00:00:00.000Z",
      type: "Expense",
    },
    {
      _id: "6737a8f03098b177484dba67",
      amount: 82.25,
      category: "Insurance Reimbursement",
      date: "2024-05-29T00:00:00.000Z",
      type: "Income",
    },
    {
      _id: "6737a9033098b177484dba6a",
      amount: 15.77,
      category: "Entertainment Subscriptions",
      date: "2024-05-29T00:00:00.000Z",
      type: "Expense",
    },
    {
      _id: "6737a9283098b177484dba6f",
      amount: 2000,
      category: "Payroll",
      date: "2024-05-28T00:00:00.000Z",
      type: "Income",
    },
  ]);

  // TODO: Emoji should be part of transaction data model
  const getEmoji = (category: string) => {
    switch (category) {
      case "Dining":
        return "🍽️";
      case "Treats":
        return "🍰";
      case "Fitness: yoga":
        return "🧘‍♀️";
      case "Household":
        return "🏠";
      case "Insurance Reimbursement":
        return "💸";
      case "Entertainment Subscriptions":
        return "📺";
      case "Payroll":
        return "💰";
      default:
        return "❓";
    }
  };

  const monthlyTransactionsByRecentDate = transactions
    .filter(
      (transaction) =>
        dayjs(transaction.date).format("YYYY-MM") === selectedMonth,
    )
    .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));

  const transactionsByDateGroup = monthlyTransactionsByRecentDate.reduce(
    (acc, transaction) => {
      const dateKey = dayjs(transaction.date).format("YYYY-MM-DD");
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(transaction);
      return acc;
    },
    {} as Record<string, Transaction[]>,
  );

  return (
    <Box>
      <List sx={{ padding: 0 }}>
        {Object.entries(transactionsByDateGroup).map(
          ([date, transactionsOnDate], index, array) => (
            <Box key={date}>
              <Typography color="text.secondary" mt={2}>
                {dayjs(date).format("MMMM DD, YYYY (ddd)")}
              </Typography>

              {transactionsOnDate.map((transaction) => (
                <ListItem key={transaction._id}>
                  <Box
                    alignItems="center"
                    bgcolor={theme.palette.border.main}
                    borderRadius="50%"
                    display="inline-flex"
                    height={32}
                    justifyContent="center"
                    mr={2}
                    p="18px"
                    width={32}
                  >
                    <Typography>{getEmoji(transaction.category)}</Typography>
                  </Box>

                  <ListItemText
                    primary={<Typography>Transaction title</Typography>}
                    secondary={
                      <Typography color="text.secondary">
                        {transaction.category || "N/A"}
                      </Typography>
                    }
                  />

                  <Typography
                    color={
                      transaction.type === "Income"
                        ? "success.main"
                        : "error.main"
                    }
                  >
                    {transaction.type === "Expense" ? "-" : ""}$
                    {transaction.amount.toLocaleString()}
                  </Typography>
                </ListItem>
              ))}
              {index < array.length - 1 && <Divider />}
            </Box>
          ),
        )}
      </List>
    </Box>
  );
};

export default DailyView;
