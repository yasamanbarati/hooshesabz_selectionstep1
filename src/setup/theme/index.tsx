import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    neutral: {
      main: "#fff",
      contrastText: "#000000",
    },
    dark: {
      main: "#000000",
      contrastText: "#fff",
    },
    blue: {
      main: "#342776",
      light: "#007bff",
      contrastText: "#fff",
    },
  }
})
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    dark: Palette["primary"];
    blue: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    dark?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
    dark: true;
    blue: true;
  }
}
