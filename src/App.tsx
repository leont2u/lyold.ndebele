import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors } from "./theme/theme";
import { Hero } from "./pages/section/Hero";
import { About } from "./pages/section/About";
import { Process } from "./pages/section/Process";
import { Projects } from "./pages/section/Projects";
import { Contact } from "./pages/section/Contact";
import { Footer } from "./pages/section/Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.text.primary,
    },
    secondary: {
      main: colors.accent,
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden" }}>
        <Hero />
        <About />
        <Process />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
