import { Box, Typography } from "@mui/material";

const LoadingMessage = () => {
  return (
    <Box mt={4} textAlign="center">
      <Typography>Loading transactions...</Typography>
    </Box>
  );
};

export default LoadingMessage;
