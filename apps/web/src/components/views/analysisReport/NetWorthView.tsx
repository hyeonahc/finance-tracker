import LoadingMessage from "@components/ui/LoadingMessage";
import { Box, Typography } from "@mui/material";
import { ISavedTransaction } from "src/types/transactions";

interface NetWorthViewProps {
  isPending: boolean;
  selectedYear: string; // Format: "YYYY" (e.g., "2024")
  transactions: ISavedTransaction[];
}

const NetWorthView = ({
  isPending,
  selectedYear,
  transactions,
}: NetWorthViewProps) => {
  if (isPending) {
    return <LoadingMessage />;
  }

  return (
    <Box pt={2}>
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Net Worth Summary
      </Typography>
    </Box>
  );
};

export default NetWorthView;
