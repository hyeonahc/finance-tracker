import "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface TypeText {
    placeholder?: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      main: string;
    };
  }
  interface PaletteOptions {
    border?: {
      main?: string;
    };
  }
}
