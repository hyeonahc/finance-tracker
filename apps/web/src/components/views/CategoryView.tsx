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
import { ISavedTransaction } from "src/types/transactions";

interface CategoryViewProps {
  isPending: boolean;
  selectedMonth: string; // Format: "YYYY-MM" (e.g., "2024-05")
  transactions: ISavedTransaction[];
}

const CategoryView = ({
  isPending,
  selectedMonth,
  transactions,
}: CategoryViewProps) => {
  const theme = useTheme();

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

  const monthlyTransactionsByCategory = transactions
    .filter(
      (transaction) =>
        dayjs(transaction.date).format("YYYY-MM") === selectedMonth,
    )
    .sort((a, b) => a.category.localeCompare(b.category));

  const transactionsByCategoryGroup = monthlyTransactionsByCategory.reduce(
    (acc, transaction) => {
      const categoryKey = transaction.category;
      if (!acc[categoryKey]) {
        acc[categoryKey] = [];
      }
      acc[categoryKey].push(transaction);
      return acc;
    },
    {} as Record<string, ISavedTransaction[]>,
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
      {Object.entries(transactionsByCategoryGroup).map(
        ([category, transactionsOnCategory], index, array) => (
          <Box key={category}>
            <Typography color="text.secondary" mt={2}>
              {category}
            </Typography>

            {transactionsOnCategory.map((transaction) => (
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
                    <Typography color="text.secondary" variant="body2">
                      {dayjs(transaction.date).format("MMM DD (ddd)")}
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

export default CategoryView;
