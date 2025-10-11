import type React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Instagram, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";
import { colors } from "../../theme/theme";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/yourhandle",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@yourchannel",
      label: "YouTube",
    },
    { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
    {
      icon: Facebook,
      href: "https://facebook.com/yourpage",
      label: "Facebook",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: colors.background.dark,
        color: colors.text.primary,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo/Brand */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                color: colors.text.primary,
              }}
            >
              Lloyd Ndebele
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                fontSize: "0.875rem",
              }}
            >
              Cinematographer
            </Typography>
          </Box>

          {/* Social Links */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                mb: 1,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Follow
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: colors.text.primary,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    width: 36,
                    height: 36,
                    border: `1px solid ${colors.accent}`,
                    "&:hover": {
                      bgcolor: colors.accent,
                      color: colors.background.dark,
                    },
                  }}
                >
                  <social.icon size={18} />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            pt: 4,
            textAlign: "center",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: colors.text.secondary,
              fontSize: "0.75rem",
            }}
          >
            © {currentYear} Lloyd Ndebele. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
