import { Box, Typography, useTheme } from "@mui/material";

interface IncomeExpenseTotalProps {
  expense: number;
  income: number;
  total: number;
}

// TODO: If IncomeExpenseTotalProps has negative values, update the display to show the minus symbol before the dollar sign (e.g., -$750 instead of $-750)
const IncomeExpenseTotal = ({
  expense,
  income,
  total,
}: IncomeExpenseTotalProps) => {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      borderBottom={`1px solid ${theme.palette.border.main}`}
      display="flex"
      justifyContent="space-around"
      padding="10px"
    >
      <Box textAlign="center">
        <Typography color="success.main" fontSize="0.9rem">
          Income
        </Typography>
        <Typography color="success.main" fontSize="1.1rem">
          ${income.toLocaleString()}
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography color="error.main" fontSize="0.9rem">
          Expense
        </Typography>
        <Typography color="error.main" fontSize="1.1rem">
          ${expense.toLocaleString()}
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography color="textPrimary" fontSize="0.9rem">
          Total
        </Typography>
        <Typography color="textPrimary" fontSize="1.1rem">
          ${total.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default IncomeExpenseTotal;
