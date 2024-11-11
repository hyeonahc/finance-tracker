import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export default function AppWrapper() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderLeft: `1px solid ${theme.palette.border.main}`,
        borderRight: `1px solid ${theme.palette.border.main}`,
        height: "100vh",
        width: "767px",
      }}
    >
      <Outlet />
    </Box>
  );
}
