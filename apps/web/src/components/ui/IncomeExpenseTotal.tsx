import { Box, Typography, useTheme } from "@mui/material";

interface IncomeExpenseTotalProps {
  expense: number;
  income: number;
  total: number;
}

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
        <Typography color="success.main" component="p" variant="customSmall">
          Income
        </Typography>
        <Typography color="success.main" component="p" variant="customMedium">
          ${income.toLocaleString()}
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography color="error.main" component="p" variant="customSmall">
          Expense
        </Typography>
        <Typography color="error.main" component="p" variant="customMedium">
          {expense === 0
            ? `$${expense.toLocaleString()}`
            : `-$${expense.toLocaleString()}`}
        </Typography>
      </Box>

      <Box textAlign="center">
        <Typography color="textPrimary" component="p" variant="customSmall">
          Total
        </Typography>
        <Typography color="textPrimary" component="p" variant="customMedium">
          {total < 0
            ? `-$${Math.abs(total).toLocaleString()}`
            : `$${total.toLocaleString()}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default IncomeExpenseTotal;
