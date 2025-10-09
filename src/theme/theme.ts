import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? "#ffffff" : "#0a0a0a",
      },
      secondary: {
        main: "#d4af37", // Gold accent
      },
      background: {
        default: isDark ? "#0a0a0a" : "#ffffff",
        paper: isDark ? "#0a0a0a" : "#f8f8f8",
      },
      text: {
        primary: isDark ? "#ffffff" : "#0a0a0a",
        secondary: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontWeight: 600,
      },
      body1: {
        lineHeight: 1.7,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 500,
          },
        },
      },
    },
  });
};

export const colors = {
  accent: "#d4af37",
  primary: "#0a0a0a",
  background: {
    dark: "#0a0a0a",
    card: "#0a0a0a",
    overlay: "rgba(0,0,0,0.8)",
  },
  text: {
    primary: "#ffffff",
    secondary: "rgba(255,255,255,0.7)",
  },
};
