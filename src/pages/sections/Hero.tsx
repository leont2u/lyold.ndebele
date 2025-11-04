import type React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        backgroundColor: "#292a2d",
        color: "#ffffff",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        pb: { xs: 6, md: 10 },
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          px: { xs: 3, md: 8 },
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
          }}
        >
          Lloyd Ndebele
        </Typography>

        <IconButton sx={{ color: "#ffffff" }}>
          <Menu />
        </IconButton>
      </Box>

      {/* Hero Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end", // ensures it sits toward bottom
          textAlign: "center",
          height: "100vh",
          pb: { xs: 6, md: 10 }, // spacing from bottom for breathing room
        }}
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", sm: "4rem", md: "8rem" }, // 👈 responsive scaling
              textTransform: "none",
              lineHeight: { xs: 1.1, md: 0.9 },
              color: "#ffffff",
            }}
          >
            Lloyd Ndebele<span style={{ fontSize: "2rem" }}>®</span>
          </Typography>
        </motion.div>

        {/* Subtitle Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, sm: 6 }}
          sx={{
            mt: { xs: 4, md: 8 },
            color: "#ffffff",
            px: { xs: 2, sm: 0 },
          }}
        >
          <Box textAlign="center">
            <Typography
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" }, mb: 1 }}
            >
              ©2025
            </Typography>
            <Typography
              sx={{
                maxWidth: { xs: 260, sm: 280 },
                mx: "auto",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                lineHeight: 1.4,
              }}
            >
              Cinematographer crafting immersive visuals that connect, move, and
              inspire.
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" }, mb: 1 }}
            >
              Brand
            </Typography>
            <Typography
              sx={{
                maxWidth: { xs: 260, sm: 280 },
                mx: "auto",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                lineHeight: 1.4,
              }}
            >
              I create distinctive, story-driven visual identities that make
              lasting impressions.
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" }, mb: 1 }}
            >
              Film & Editing
            </Typography>
            <Typography
              sx={{
                maxWidth: { xs: 260, sm: 280 },
                mx: "auto",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                lineHeight: 1.4,
              }}
            >
              Seamless storytelling and cinematic editing designed to evoke
              emotion and impact.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
