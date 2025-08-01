import LoadingMessage from "@components/ui/LoadingMessage";
import { AllTxSummary, YearlyTxSummary } from "@custom-types/transactions";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface NetWorthViewProps {
  isPending: boolean;
  allTxSummary: AllTxSummary;
  yearlyTxSummary: YearlyTxSummary;
}

type ChartData = {
  expense: number;
  income: number;
  total: number;
  year: string;
};

const NetWorthView = ({
  isPending,
  allTxSummary,
  yearlyTxSummary,
}: NetWorthViewProps) => {
  // TODO: Move the below code to parent component
  // Add condition when networth is slecteed
  const [chartData, setChartData] = useState<ChartData[]>();

  useEffect(() => {
    const result = Object.entries(yearlyTxSummary).map(([year, data]) => ({
      year,
      ...data,
    }));
    setChartData(result);
  }, [yearlyTxSummary]);

  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <Box pt={2}>
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Net Worth Summary
      </Typography>

      <Box height={300}>
        <ResponsiveContainer height="100%" width="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              dataKey="total"
              dot={{ r: 5 }}
              stroke="#21A985"
              strokeWidth={2}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Typography>Cash: {allTxSummary.total}</Typography>
    </Box>
  );
};

export default NetWorthView;
