import { createTheme } from "@mui/material/styles";

// 🎨 Centralized color palette
export const colors = {
  primary: "#0a0a0a", // slightly deeper black
  secondary: "#f5f5f5",
  accent: "#d4af37", // gold accent
  text: {
    primary: "#ffffff",
    secondary: "#bdbdbd",
    dark: "#1a1a1a",
  },
  background: {
    dark: "#050505",
    overlay: "rgba(0, 0, 0, 0.75)",
    card: "rgba(26, 26, 26, 0.85)",
  },
};

// 🪄 Typography choices:
// Headings: Cinzel — cinematic, elegant
// Body: Inter — modern, highly legible
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
    fontFamily: '"Inter", "Cinzel", serif',
    h1: {
      fontFamily: '"Cinzel", serif',
      fontSize: "4.5rem",
      fontWeight: 700,
      letterSpacing: "0.04em",
      lineHeight: 1.1,
      "@media (max-width:900px)": {
        fontSize: "3.2rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2.4rem",
      },
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: "0.03em",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: '"Cinzel", serif',
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "0.02em",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "1.05rem",
      lineHeight: 1.75,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "0.95rem",
      lineHeight: 1.6,
      fontWeight: 300,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: "0.08em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "50px",
          padding: "10px 28px",
          fontSize: "1rem",
          letterSpacing: "0.03em",
          transition: "all 0.3s ease",
        },
      },
    },
  },
});
