import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { LAYOUT_PADDING } from "src/constants/constants";

const Layout = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        padding: LAYOUT_PADDING,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
