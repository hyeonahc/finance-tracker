import { createTheme, ThemeOptions } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiButtonBase: {},
    MuiLink: {},
  },
  palette: {
    primary: {
      main: "#21A985",
    },
    text: {
      primary: "#000000",
      secondary: "#737373",
      placeholder: "#DEDEDE",
      disabled: "#BDBDBD",
    },
    success: {
      main: "#21A985",
    },
    error: {
      main: "#FC4100",
    },
    border: {
      main: "#DEDEDE",
    },
  },
} as ThemeOptions);

export default theme;
