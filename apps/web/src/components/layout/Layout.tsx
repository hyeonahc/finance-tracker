import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { LAYOUT_PADDING } from "src/constants/constants";

const Layout = () => {
  const location = useLocation();

  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        padding:
          location.pathname === "/add-transaction" ? "0 16px" : LAYOUT_PADDING,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
