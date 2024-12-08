import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const AppWrapper = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderLeft: `1px solid ${theme.palette.border.main}`,
        borderRight: `1px solid ${theme.palette.border.main}`,
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        width: "767px",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AppWrapper;
