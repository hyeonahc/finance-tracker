import { LinkProps } from "@mui/material/Link";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { LinkBehavior } from "../components/LinkBehaviour";

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
  },
  palette: {
    error: {
      main: red.A400,
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
});

export default theme;
