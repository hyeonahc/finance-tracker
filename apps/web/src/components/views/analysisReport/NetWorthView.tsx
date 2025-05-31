import LoadingMessage from "@components/ui/LoadingMessage";
import { Box, Typography } from "@mui/material";

interface NetWorthViewProps {
  isPending: boolean;
  financialSummary: {
    expense: number;
    income: number;
    total: number;
  };
}

const NetWorthView = ({ isPending, financialSummary }: NetWorthViewProps) => {
  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <Box pt={2}>
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Net Worth Summary
      </Typography>
      <Typography>Cash: {financialSummary.total}</Typography>
    </Box>
  );
};

export default NetWorthView;
