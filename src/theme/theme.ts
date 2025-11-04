import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#292a2d",
      paper: "#292a2d",
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Geist", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4.5rem",
      fontWeight: 600,
      color: "#ffffff",
      letterSpacing: "2px",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      color: "#ffffff",
    },
    body1: {
      color: "#ffffff",
      fontSize: "0.95rem",
      letterSpacing: "0.5px",
    },
    body2: {
      color: "#ffffff",
      fontSize: "0.9rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontSize: "0.75rem",
          fontWeight: 600,
          borderRadius: "25px",
          padding: "10px 30px",
          border: "1px solid #ffffff",
          color: "#ffffff",
          backgroundColor: "transparent",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#292a2d",
          },
        },
      },
    },
  },
});
