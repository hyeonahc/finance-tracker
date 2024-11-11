import BottomNavBar from "@components/BottomNavBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { BOTTOM_NAV_HEIGHT } from "src/constants/constants";

export default function LayoutWithBottomNav() {
  return (
    <>
      <Box
        component="main"
        sx={{
          paddingBottom: BOTTOM_NAV_HEIGHT,
        }}
      >
        <Outlet />
      </Box>
      <BottomNavBar />
    </>
  );
}
