import { Box, Typography, useTheme } from "@mui/material";

interface IncomeExpenseTotalProps {
  expense: number;
  income: number;
  total: number;
}

export default function IncomeExpenseTotal({
  expense,
  income,
  total,
}: IncomeExpenseTotalProps) {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      borderBottom={`1px solid ${theme.palette.border.main}`}
      display="flex"
      justifyContent="space-around"
      mb={2}
      padding={2}
    >
      <Box textAlign="center">
        <Typography color="success.main" variant="subtitle1">
          Income
        </Typography>
        <Typography color="success.main" variant="h6">
          ${income.toLocaleString()}
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography color="error.main" variant="subtitle1">
          Expense
        </Typography>
        <Typography color="error.main" variant="h6">
          ${expense.toLocaleString()}
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography color="textPrimary" variant="subtitle1">
          Total
        </Typography>
        <Typography color="textPrimary" variant="h6">
          ${total.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}
