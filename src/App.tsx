import { useRef } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Footer from "./pages/sections/Footer";
import { Hero } from "./pages/sections/Hero";
import ProjectShowcase from "./pages/sections/Projects";
import ContactSection from "./pages/sections/Contacts";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Box ref={heroRef}>
          <Hero />
        </Box>

        <Box ref={projectsRef}>
          <ProjectShowcase />
        </Box>

        <Box ref={contactRef}>
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
