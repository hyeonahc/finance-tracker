import { Transaction } from "@custom-types/transactions";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import theme from "@theme/index";
import dayjs from "dayjs";
import getEmoji from "src/util/getEmoji";

type TransactionCardProps = {
  groupByDateTxs: [string, Transaction[]][];
};

const TransactionCard = ({ groupByDateTxs }: TransactionCardProps) => {
  return (
    <List sx={{ padding: 0 }}>
      {groupByDateTxs.map(([key, transactionsOnDate], index, array) => (
        <Box key={key}>
          <Typography color="text.secondary" mt={2}>
            {key === "date" ? dayjs(key).format("MMM DD, YYYY (ddd)") : key}
          </Typography>

          {transactionsOnDate.map((tx) => (
            <ListItem key={tx._id}>
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
                <Typography>{getEmoji(tx.category)}</Typography>
              </Box>

              <ListItemText
                primary={<Typography>{tx.title}</Typography>}
                secondary={
                  <Typography color="text.secondary" variant="body2">
                    {tx.category || "N/A"}
                  </Typography>
                }
              />

              <Typography
                color={tx.type === "Income" ? "success.main" : "error.main"}
              >
                {tx.type === "Expense" && "-"}
                {tx.cost.toLocaleString("en-CA", {
                  currency: "CAD",
                  style: "currency",
                })}
              </Typography>
            </ListItem>
          ))}
          {index < array.length - 1 && <Divider />}
        </Box>
      ))}
    </List>
  );
};

export default TransactionCard;
