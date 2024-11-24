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
import { ITransaction } from "src/types/transactions";

interface DailyViewProps {
  isPending: boolean;
  selectedMonth: string; // Format: "YYYY-MM" (e.g., "2024-05")
  transactions: ITransaction[];
}

const DailyView = ({
  isPending,
  selectedMonth,
  transactions,
}: DailyViewProps) => {
  const theme = useTheme();

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
    {} as Record<string, ITransaction[]>,
  );

  if (isPending) {
    return (
      <Box mt={4} textAlign="center">
        <Typography>Loading transactions...</Typography>
      </Box>
    );
  }

  return (
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
                  primary={<Typography>{transaction.title}</Typography>}
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
                  {transaction.cost.toLocaleString()}
                </Typography>
              </ListItem>
            ))}
            {index < array.length - 1 && <Divider />}
          </Box>
        ),
      )}
    </List>
  );
};

export default DailyView;
