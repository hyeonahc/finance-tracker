import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

// Define the type for transaction items
interface Transaction {
  _id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
  type: "Expense" | "Income";
}

// Define the component's props type
interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <Box>
      <Typography align="center" mb={2} variant="h6">
        Transaction History
      </Typography>

      <List>
        {transactions.map((transaction) => (
          <Box key={transaction._id}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography
                    color={
                      transaction.type === "Income"
                        ? "success.main"
                        : "error.main"
                    }
                    variant="subtitle1"
                  >
                    {transaction.category} - {transaction.type}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography color="text.secondary" variant="body2">
                      {new Date(transaction.date).toLocaleDateString()}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      Note: {transaction.note || "N/A"}
                    </Typography>
                  </>
                }
              />
              <Typography
                color={
                  transaction.type === "Income" ? "success.main" : "error.main"
                }
                variant="subtitle1"
              >
                {transaction.type === "Expense" ? "-" : ""}$
                {transaction.amount.toLocaleString()}
              </Typography>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
