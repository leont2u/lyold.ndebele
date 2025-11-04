"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import type React from "react";

interface NavbarProps {
  onNavigate: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    heroRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };
}

export default function Navbar({ onNavigate, refs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (ref: React.RefObject<HTMLDivElement>) => {
    onNavigate(ref);
    setMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#292a2d",
        boxShadow: "none",
        borderBottom: "none",
        padding: { xs: "20px 20px", sm: "30px 40px", md: "30px 60px" },
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
          backgroundColor: "#292a2d",
        }}
      >
        {/* Logo */}
        <Box
          onClick={() => handleNavigation(refs.heroRef)}
          sx={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            LL
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            ND
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "50px",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => handleNavigation(refs.projectsRef)}
            sx={{
              color: "#d4af37",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "1px",
              fontWeight: 500,
              background: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleNavigation(refs.contactRef)}
            sx={{
              color: "#d4af37",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "1px",
              fontWeight: 500,
              background: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#d4af37" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#292a2d",
            marginTop: "60px",
            paddingTop: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Button
            onClick={() => handleNavigation(refs.projectsRef)}
            sx={{
              color: "#d4af37",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: "1px",
              fontWeight: 500,
              background: "none",
              justifyContent: "flex-start",
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleNavigation(refs.contactRef)}
            sx={{
              color: "#d4af37",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: "1px",
              fontWeight: 500,
              background: "none",
              justifyContent: "flex-start",
            }}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
