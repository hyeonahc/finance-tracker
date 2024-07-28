import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { FC } from "react";

import theme from "theme/index";

const MuiProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiProvider;
