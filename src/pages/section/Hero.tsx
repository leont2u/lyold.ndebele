import type React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        bgcolor: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ===== Hero Content ===== */}
      <Container
        maxWidth="lg"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          minHeight: "100vh",
          position: "relative",
          zIndex: 5,
          py: 8,
        }}
      >
        {/* ===== Navbar ===== */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
            py: 3,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          {/* Logo / Name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ff6433",
              }}
            />
            Lloyd
          </Box>

          {/* Hamburger Menu */}
          <IconButton sx={{ color: "#fff" }}>
            <Menu />
          </IconButton>
        </Box>
        {/* === Left Column === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ position: "relative" }}>
            {/* Status Badge */}
            <Chip
              label="Available for Work"
              sx={{
                bgcolor: "#222",
                color: "#fff",
                mb: 2,
                fontWeight: 500,
                px: 2,
              }}
            />

            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "2rem" },
                lineHeight: 1.4,
                maxWidth: 500,
                mb: 3,
              }}
            >
              Cinematographer & Video Editor based in Zimbabwe
            </Typography>

            {/* Giant Name Behind */}
            <Typography
              sx={{
                fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                fontWeight: 900,
                lineHeight: 0.9,
                color: "rgba(255, 255, 255, 0.05)",
                letterSpacing: "-0.02em",
                userSelect: "none",
              }}
            >
              Lloyd
            </Typography>
          </Box>
        </motion.div>

        {/* === Right Column === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Profile Image */}
            <Box
              component="img"
              src="/IMG_4188.JPG"
              alt="Lloyd Ndebele"
              sx={{
                width: "100%",
                maxWidth: 400,
                borderRadius: 3,
                mb: 4,
                objectFit: "cover",
                aspectRatio: "3 / 4",
              }}
            />

            {/* Short Intro */}
            <Typography
              sx={{
                color: "#ccc",
                mb: 3,
                fontSize: "1rem",
                maxWidth: 400,
              }}
            >
              Hi, I'm Lloyd Ndebele — a cinematographer and video editor
              passionate about creating visual stories that move and inspire.
            </Typography>

            {/* CTA Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6433",
                color: "#fff",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e55a2e",
                },
              }}
            >
              See my works
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
