import LoadingMessage from "@components/ui/LoadingMessage";
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
import getEmoji from "src/util/getEmoji";

interface DailyViewProps {
  isPending: boolean;
  selectedMonth: string; // Format: "YYYY-MM" (e.g., "2024-05")
  transactions: ISavedTransaction[];
}

const DailyView = ({
  isPending,
  selectedMonth,
  transactions,
}: DailyViewProps) => {
  const theme = useTheme();

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
    {} as Record<string, ISavedTransaction[]>,
  );

  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <List sx={{ padding: 0 }}>
      {Object.entries(transactionsByDateGroup).map(
        ([date, transactionsOnDate], index, array) => (
          <Box key={date}>
            <Typography color="text.secondary" mt={2}>
              {dayjs(date).format("MMM DD, YYYY (ddd)")}
            </Typography>

            {/* TODO: The most recently added transaction for the same day should be displayed at the top of the list. */}
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
                    <Typography color="text.secondary" variant="body2">
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
                  {transaction.type === "Expense" && "-"}
                  {transaction.cost.toLocaleString("en-CA", {
                    currency: "CAD",
                    style: "currency",
                  })}
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
