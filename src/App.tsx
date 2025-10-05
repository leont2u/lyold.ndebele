import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme/theme";
import { Navbar } from "./pages/navigation/NavBar";
import { Hero } from "./pages/section/Hero";
import { About } from "./pages/section/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./pages/section/Contact";
import { Story } from "./components/Story";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden" }}>
        <Navbar />
        <Hero />
        {/* <About /> */}
        {/* <Story /> */}
        <Gallery />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
