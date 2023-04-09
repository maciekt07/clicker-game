import { createTheme } from "@mui/material/styles";
// TODO: Move this file to the "theme" folder.
export const colorPalette = {
  yellow: "#ffb604",
  orange: "#f28705",
  maroon: "#380000",
  peach: "#f2b680",
  brown: "#dc823c",
  purple: "#4f2f4f",
  indigo: "#4b0082",
};

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: colorPalette.orange,
    },
    secondary: {
      main: colorPalette.peach,
    },
  },
});
