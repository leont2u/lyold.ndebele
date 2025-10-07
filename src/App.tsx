import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme/theme";
import { Navbar } from "./pages/navigation/NavBar";
import { Hero } from "./pages/section/Hero";
import { Gallery } from "./components/Gallery";
import { Contact } from "./pages/section/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        {/* <About />      */}
        {/* <Story /> */}
        <Gallery />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
