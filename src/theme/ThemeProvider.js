import { createTheme } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import GlobalStyles from "../style/globalStyle";
import React from "react";
import typography from "./typography";
import palette from "./palette";

export default function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: palette,
    typography,
  });
  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
