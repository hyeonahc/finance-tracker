import { Transaction } from "@custom-types/transactions";
import { Box, Divider, List, Typography } from "@mui/material";
import dayjs from "dayjs";

import TransactionListItem from "./TransactionListItem";

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
            <TransactionListItem
              category={tx.category}
              cost={tx.cost}
              key={tx._id}
              title={tx.title}
              type={tx.type}
            />
          ))}
          {index < array.length - 1 && <Divider />}
        </Box>
      ))}
    </List>
  );
};

export default TransactionCard;
