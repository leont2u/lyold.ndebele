import type React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Youtube, Instagram, Linkedin, Mail } from "lucide-react";
import { colors } from "../theme";

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", url: "https://youtube.com" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Mail, label: "Email", url: "mailto:lloyd@example.com" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.primary.main,
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Logo/Name */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            Lloyd Ndebele
          </Typography>

          {/* Social Links */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    bgcolor: colors.secondary.main,
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <social.icon size={20} />
              </IconButton>
            ))}
          </Box>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Lloyd Ndebele. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
