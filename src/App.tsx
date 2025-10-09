import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { getTheme } from "./theme/theme";
import { useThemeMode, ThemeProvider } from "./context/ThemeContext";
import { Hero } from "./pages/section/Hero";
import { Projects } from "./pages/section/Projects";
import { Process } from "./pages/section/Process";
import { Contact } from "./pages/section/Contact";
import { Footer } from "./pages/section/Footer";

function AppContent() {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden" }}>
        {/* <Navbar /> */}
        <Hero />
        {/* <About /> */}
        <Projects />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </Box>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      {" "}
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
