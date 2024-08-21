import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { LAYOUT_PADDING } from "src/constants/constants";

export default function Layout() {
  return (
    <Box
      component="main"
      sx={{
        padding: LAYOUT_PADDING,
      }}
    >
      <Outlet />
    </Box>
  );
}
