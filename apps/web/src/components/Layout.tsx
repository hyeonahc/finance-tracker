import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderColor: theme.palette.border.main,
        borderLeft: 1,
        borderRight: 1,
        height: "100vh",
        width: "767px",
      }}
    >
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
}
