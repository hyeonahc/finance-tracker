import BottomNavBar from "@components/BottomNavBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { BOTTOM_NAV_HEIGHT, LAYOUT_PADDING } from "src/constants/constants";

export default function LayoutWithBottomNav() {
  return (
    <>
      <Box
        component="main"
        sx={{
          padding: LAYOUT_PADDING,
          paddingBottom: BOTTOM_NAV_HEIGHT,
        }}
      >
        <Outlet />
      </Box>
      <BottomNavBar />
    </>
  );
}
