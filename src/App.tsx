import { useRef } from "react";
import ProjectShowcase from "./pages/sections/ProjectShowcase";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import ContactSection from "./pages/sections/Contacts";
import Footer from "./pages/sections/Footer";
import { Hero } from "./pages/sections/Hero";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ backgroundColor: "#292a2d", minHeight: "100vh" }}>
        <Box ref={heroRef}>
          <Hero />
        </Box>

        <Box ref={projectsRef}>
          <ProjectShowcase />
        </Box>

        <Box ref={contactRef} sx={{ minHeight: "100vh", p: 4 }}>
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
