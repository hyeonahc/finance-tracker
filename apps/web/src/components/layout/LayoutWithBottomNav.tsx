import BottomNavBar from "@components/layout/BottomNavBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { BOTTOM_NAV_HEIGHT } from "src/constants/constants";

const LayoutWithBottomNav = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          height: "100%",
          overflowY: "auto",
          paddingBottom: BOTTOM_NAV_HEIGHT,
          position: "relative",
        }}
      >
        <Outlet />
      </Box>
      <BottomNavBar />
    </>
  );
};

export default LayoutWithBottomNav;
