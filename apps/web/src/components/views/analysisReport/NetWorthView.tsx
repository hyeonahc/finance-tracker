import LoadingMessage from "@components/ui/LoadingMessage";
import { AllTxSummary } from "@custom-types/transactions";
import { Box, Typography } from "@mui/material";

interface NetWorthViewProps {
  isPending: boolean;
  allTxSummary: AllTxSummary;
}

const NetWorthView = ({ isPending, allTxSummary }: NetWorthViewProps) => {
  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <Box pt={2}>
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Net Worth Summary
      </Typography>
      <Typography>Cash: {allTxSummary.total}</Typography>
    </Box>
  );
};

export default NetWorthView;
