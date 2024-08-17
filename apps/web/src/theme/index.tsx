import { ThemeOptions, createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiButtonBase: {},
    MuiLink: {},
  },
  palette: {
    border: {
      main: "#DEDEDE",
    },
    error: {
      main: "#FC4100",
    },
    primary: {
      main: "#21A985",
    },
    success: {
      main: "#21A985",
    },
    text: {
      disabled: "#BDBDBD",
      placeholder: "#DEDEDE",
      primary: "#000000",
      secondary: "#737373",
    },
  },
} as ThemeOptions);

export default theme;
