import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">My footer content.</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PageLayout;
