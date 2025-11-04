"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export default function AboutSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: "white",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 6, md: 12 },
        }}
      >
        {/* Left Text */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.warning.main,
              fontWeight: 600,
              mb: 1,
            }}
          >
            Behind the Lens
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Crafting Visual Stories <br />
            That Capture Emotion
          </Typography>
        </Box>

        {/* Right Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            maxWidth: 500,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 3,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            I’m a cinematographer, videographer, video editor, and 1st assistant
            camera dedicated to translating emotion, rhythm, and narrative into
            powerful visuals. Whether it’s a commercial campaign, documentary,
            or music video, I focus on capturing authentic moments that tell
            meaningful stories.
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mb: 4,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Let’s create visuals that move people.
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              endIcon={<ArrowRight />}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
                fontWeight: 700,
                px: 5,
                py: 1.3,
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  opacity: 0.9,
                },
              }}
            >
              Get in touch
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
