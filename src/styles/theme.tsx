import { createTheme } from "@mui/material/styles";
export const colorPalette = {
  yellow: "#ffb604",
  orange: "#f28705",
  maroon: "#380000",
  peach: "#f2b680",
  brown: "#dc823c",
  purple: "#4f2f4f",
  indigo: "#531aa5",
  red: "#ff3737",
};

export const MuiTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: colorPalette.orange,
    },
    secondary: {
      main: colorPalette.peach,
    },
    error: {
      main: colorPalette.red,
    },
  },
});
