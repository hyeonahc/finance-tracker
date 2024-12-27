interface MonthlyViewProps {
  isPending: boolean;
  selectedYear: string; // Format: "YYYY" (e.g., "2024")
  transactions: ISavedTransaction[];
}
import LoadingMessage from "@components/ui/LoadingMessage";
import { Box, Divider, List, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ISavedTransaction } from "src/types/transactions";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MonthlyView = ({
  isPending,
  selectedYear,
  transactions,
}: MonthlyViewProps) => {
  const [monthlyTransactionsSummary, setMonthlyTransactionsSummary] = useState<
    Record<
      string,
      {
        expense: number;
        income: number;
        total: number;
      }
    >
  >({});

  const selectedYearTransactions = useMemo(
    () =>
      transactions.filter((transaction) => {
        return transaction.date.slice(0, 4) === selectedYear;
      }),
    [transactions, selectedYear],
  );

  const monthlyGroupedTransactions = useMemo(
    () =>
      selectedYearTransactions.reduce<Record<string, ISavedTransaction[]>>(
        (acc, transaction) => {
          const month = transaction.date.slice(5, 7);
          if (!acc[month]) {
            acc[month] = [];
          }
          acc[month].push(transaction);
          return acc;
        },
        {},
      ),
    [selectedYearTransactions],
  );

  useEffect(() => {
    const calculateMonthlySummary = (
      monthlyGroupedTransactions: Record<
        string,
        Array<{
          cost: number;
          type: "Expense" | "Income";
        }>
      >,
    ) => {
      const monthlySummary = Object.entries(monthlyGroupedTransactions).reduce<
        Record<
          string,
          {
            expense: number;
            income: number;
            total: number;
          }
        >
      >((acc, [month, transactions]) => {
        const monthName = monthNames[parseInt(month, 10) - 1];

        let income = 0;
        let expense = 0;

        transactions.forEach(({ cost, type }) => {
          if (type === "Income") {
            income += cost;
          } else if (type === "Expense") {
            expense += cost;
          }
        });

        const total = income - expense;

        acc[monthName] = { expense, income, total };
        return acc;
      }, {});

      setMonthlyTransactionsSummary(monthlySummary);
    };

    calculateMonthlySummary(monthlyGroupedTransactions);
  }, [monthlyGroupedTransactions]);

  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <Box pt={2}>
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        {selectedYear}
      </Typography>
      <List sx={{ padding: 0 }}>
        {Object.entries(monthlyTransactionsSummary).map(
          ([monthName, summary], index) => (
            <Box>
              <Box
                key={index}
                py={2}
                sx={{ alignItems: "center", display: "flex" }}
              >
                <Typography
                  component="p"
                  sx={{ flex: 1 }}
                  variant="customMedium"
                >
                  {monthName}
                </Typography>
                <Typography
                  color="success.main"
                  component="p"
                  sx={{ flex: 1 }}
                  variant="customMedium"
                >
                  ${summary.income.toLocaleString()}
                </Typography>
                <Typography
                  color="error.main"
                  component="p"
                  sx={{ flex: 1 }}
                  variant="customMedium"
                >
                  {summary.expense === 0
                    ? `$${summary.expense.toLocaleString()}`
                    : `-$${summary.expense.toLocaleString()}`}
                </Typography>
                <Typography
                  component="p"
                  sx={{ flex: 1 }}
                  variant="customMedium"
                >
                  {summary.total < 0
                    ? `-$${Math.abs(summary.total).toLocaleString()}`
                    : `$${summary.total.toLocaleString()}`}
                </Typography>
              </Box>
              <Divider />
            </Box>
          ),
        )}
      </List>
    </Box>
  );
};

export default MonthlyView;
