import type React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../theme";

interface NavbarProps {
  window?: () => Window;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function HideOnScroll({
  children,
  window,
}: {
  children: React.ReactElement;
  window?: () => Window;
}) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        pt: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <X size={24} />
        </IconButton>
      </Box>
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
                onClick={() => handleNavClick(item.href)}
                sx={{
                  py: 2,
                  px: 3,
                  "&:hover": {
                    bgcolor: colors.background.cream,
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
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
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          elevation={scrolled ? 2 : 0}
          sx={{
            bgcolor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            transition: "all 0.3s ease-in-out",
            borderBottom: scrolled ? `1px solid ${colors.divider}` : "none",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: 2,
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                component="a"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  letterSpacing: "0.05em",
                }}
              >
                Lloyd Ndebele
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Box
                    component="a"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    sx={{
                      px: 2,
                      py: 1,
                      color: "text.primary",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      position: "relative",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "secondary.main",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: "2px",
                        bgcolor: "secondary.main",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "80%",
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
              sx={{
                display: { md: "none" },
                color: "text.primary",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              </AnimatePresence>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
