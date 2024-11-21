import { ThemeOptions, createTheme } from "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    border: Palette["primary"];
  }
  interface PaletteOptions {
    border?: PaletteColorOptions;
  }
  interface TypeText {
    btn: string;
  }
}

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
      btn: "#fff",
      disabled: "#BDBDBD",
      placeholder: "#DEDEDE",
      primary: "#000000",
      secondary: "#737373",
    },
  },
} as ThemeOptions);

export default theme;
