import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Container,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../../theme/theme";

const navItems = [
  { label: "Home", href: "#home" },
  //   { label: "About", href: "#about" },
  //   { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: colors.background.dark,
        pt: 8,
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.href)}
                sx={{
                  py: 2,
                  px: 4,
                  "&:hover": {
                    backgroundColor: colors.background.card,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "1.25rem",
                      fontFamily: '"Playfair Display", serif',
                      color:
                        activeSection === item.href.substring(1)
                          ? colors.accent
                          : colors.text.primary,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? colors.background.overlay : "transparent",
          backdropFilter: trigger ? "blur(10px)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: colors.text.primary,
                  cursor: "pointer",
                }}
                onClick={() => scrollToSection("#home")}
              >
                Lloyd Ndebele
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Box
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      fontSize: "0.95rem",
                      letterSpacing: "0.1em",
                      color:
                        activeSection === item.href.substring(1)
                          ? colors.accent
                          : colors.text.primary,
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: colors.accent,
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width:
                          activeSection === item.href.substring(1)
                            ? "100%"
                            : "0%",
                        height: "2px",
                        backgroundColor: colors.accent,
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "70%",
            maxWidth: 300,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
