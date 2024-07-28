import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BottomNavBar from "components/BottomNavBar";
import { Outlet, useLocation } from "react-router-dom";

const PageLayout = () => {
  const theme = useTheme();
  const location = useLocation();

  const hideBottomNavBar = ["/signin", "/signup"].includes(location.pathname);

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
        {!hideBottomNavBar && <BottomNavBar />}
      </Box>
    </Box>
  );
};

export default PageLayout;
