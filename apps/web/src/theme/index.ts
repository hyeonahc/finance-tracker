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
  interface TypographyVariants {
    customMedium: React.CSSProperties;
    customSmall: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    customMedium?: React.CSSProperties;
    customSmall?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    customMedium: true;
    customSmall: true;
  }
}

// TODO: Find a way to display color palette
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
  typography: {
    customMedium: {
      fontSize: "1.1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    customSmall: {
      fontSize: "0.9rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
} as ThemeOptions);

export default theme;
