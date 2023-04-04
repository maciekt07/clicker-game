import { createTheme } from "@mui/material/styles";

export const colorPalette = {
  yellow: "#ffb604",
  orange: "#f28705",
  maroon: "#380000",
  peach: "#f2b680",
  brown: "#dc823c",
};

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: colorPalette.orange,
    },
    secondary: {
      main: "#672fff",
    },
  },
});
