import BottomNavBar from "@components/BottomNavBar";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export default function LayoutWithBottomNav() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderLeft: 1,
        borderRight: 1,
        borderColor: theme.palette.border.main,
        height: "100vh",
        width: "767px",
      }}
    >
      <Box component="main" sx={{ paddingBottom: "80px" }}>
        <Outlet />
      </Box>
      <BottomNavBar />
    </Box>
  );
}
