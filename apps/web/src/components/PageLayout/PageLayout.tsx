import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import BottomNavBar from "../BottomNavBar";

const PageLayout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ border: 1, borderColor: theme.palette.border.main }}>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "480px",
        }}
      >
        <Container
          component="main"
          sx={{
            minHeight: "90vh",
          }}
        >
          <Outlet />
        </Container>
        <BottomNavBar />
      </Box>
    </Box>
  );
};

export default PageLayout;
