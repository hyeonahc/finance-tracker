import { ThemeOptions, createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles/createPalette";

// Extend MUI's Palette to include 'border'
declare module "@mui/material/styles" {
  interface Palette {
    border: Palette["primary"];
  }
  interface PaletteOptions {
    border?: PaletteColorOptions;
  }
}

// A custom theme for this app
const theme = createTheme({
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
