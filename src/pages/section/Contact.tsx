import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import { colors } from "../../theme/theme";

const socialLinks = [
  { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
  { icon: Mail, url: "mailto:your@email.com", label: "Email" },
];

export const Contact: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.dark,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              textAlign: "center",
              color: colors.text.primary,
            }}
          >
            Let's Work Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: "center",
              color: colors.text.secondary,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Have a project in mind? Let's create something amazing together.
            Reach out through any of the platforms below.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {socialLinks.map((social, index) => (
              <Grid key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 60,
                      height: 60,
                      border: `2px solid ${colors.accent}`,
                      color: colors.accent,
                      "&:hover": {
                        backgroundColor: colors.accent,
                        color: colors.primary,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <social.icon size={24} />
                  </IconButton>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="body2"
            sx={{
              mt: 8,
              textAlign: "center",
              color: colors.text.secondary,
            }}
          >
            © 2025 Lloyd Ndebele. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};
