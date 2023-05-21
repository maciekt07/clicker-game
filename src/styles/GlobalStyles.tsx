import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  --toastify-font-family: "Poppins", sans-serif;
  --toastify-color-error: #ff3737;
  --toastify-color-progress-dark: #f28705;
  --toastify-color-progress-light: #f28705;
}

* {
  -webkit-tap-highlight-color: transparent;
}

*::selection {
  background: rgb(255, 153, 37);
}

body {
  font-family: "Poppins", sans-serif !important;
  margin: 0;
  background: #531aa5;
  color: #efefef;
  min-width: 320px;
  min-height: 100vh;
  touch-action: manipulation;
  opacity: 0.8;
}
.MuiPaper-root,
.MuiButtonBase-root {
  font-family: "Poppins", sans-serif !important;
}

.MuiDialog-container {
  backdrop-filter: blur(4px);
}

a {
  text-decoration: none;
}

button {
  font-family: "Poppins", sans-serif;
}

.Toastify__toast-theme--light {
  background: #ffffffd9;
  backdrop-filter: blur(4px);
  padding: 12px;
  border-radius: 18px;
  color: #4b4b4b;
  user-select: none;
}

.MuiSlider-valueLabel {
  border-radius: 10px !important;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25) !important;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25) !important;
  padding: 6px 14px !important;
  color: #000000c8 !important;
  background: hsl(213deg 85% 97%) !important;
  margin-top: 90px;
}

.MuiSlider-valueLabel::before,
.MuiSlider-valueLabel::after {
  display: none;
}
.MuiTooltip-tooltip {
    color: white !important;
    background-color: #626262c5 !important;
    backdrop-filter: blur(6px) !important;
    padding: 8px 16px !important;
    border-radius: 8px !important;
    font-size: 12px !important;
}
`;
