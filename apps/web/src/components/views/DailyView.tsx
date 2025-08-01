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
import {
  getTxByLatest,
  getTxBySelectedMonth,
  groupTxDate,
} from "@util/transactionUtils";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
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

  const [dailyViewTx, setDailyViewTx] = useState<
    Record<string, ISavedTransaction[]>
  >({});

  useEffect(() => {
    const filtered = getTxBySelectedMonth(transactions, selectedMonth);
    const sorted = getTxByLatest(filtered);
    const grouped = groupTxDate(sorted);

    setDailyViewTx(grouped);
  }, [transactions, selectedMonth]);

  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <List sx={{ padding: 0 }}>
      {Object.entries(dailyViewTx).map(
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
