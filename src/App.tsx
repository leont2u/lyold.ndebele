import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Navbar } from "./navigation/NavBar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
