import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "@theme/index";
import React, { FC } from "react";

const MuiProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiProvider;
