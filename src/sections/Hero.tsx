import type React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedButton } from "../components/AnimatedButton";
import { colors } from "../theme";
import heroBackground from "../assets/images/hero-background.JPG";

export const Hero: React.FC = () => {
  const handleScrollToWork = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: colors.background.cream,
      }}
    >
      {/* Background Image/Video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(255, 255, 255, 0.7)",
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={heroBackground}
          alt="Hero background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* If you want to use a video instead, replace the img with:
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="your-video-url.mp4" type="video/mp4" />
        </Box>
        */}
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            Lloyd Ndebele
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="h4"
            component="p"
            sx={{
              mb: 4,
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
              fontWeight: 400,
              color: "text.secondary",
              fontStyle: "italic",
            }}
          >
            Visual Storyteller | Videographer | Drone Pilot
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatedButton
            variant="contained"
            size="large"
            onClick={handleScrollToWork}
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                bgcolor: "secondary.dark",
              },
            }}
          >
            View My Work
          </AnimatedButton>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          cursor: "pointer",
        }}
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown size={32} color={colors.text.secondary} />
        </motion.div>
      </motion.div>
    </Box>
  );
};
