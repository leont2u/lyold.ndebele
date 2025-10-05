import { createTheme } from "@mui/material/styles";

// Centralized color palette - change these to update the entire site
export const colors = {
  primary: "#1a1a1a",
  secondary: "#f5f5f5",
  accent: "#d4af37", // Gold accent
  text: {
    primary: "#ffffff",
    secondary: "#cccccc",
    dark: "#1a1a1a",
  },
  background: {
    dark: "#0a0a0a",
    overlay: "rgba(0, 0, 0, 0.7)",
    card: "rgba(26, 26, 26, 0.8)",
  },
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background.dark,
      paper: colors.background.card,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "4rem",
      fontWeight: 700,
      letterSpacing: "0.02em",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "3rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "2rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          padding: "12px 32px",
          fontSize: "0.875rem",
          letterSpacing: "0.1em",
        },
      },
    },
  },
});
