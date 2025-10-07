import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo from "../../assets/video/heroVideo.mp4";
import video from "../../assets/video/video.MP4";

export const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(65%)",
        }}
      />

      {/* Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to left, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Camera Shutter Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "40%",
          right: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
          filter: "blur(30px)",
          zIndex: 1,
        }}
      />

      {/* Content (on right side) */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-end" },
          px: { xs: 3, md: 10 },
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Stack spacing={3} alignItems="flex-end">
            {/* Tagline */}
            <Typography
              variant="overline"
              sx={{
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 500,
              }}
            >
              CINEMATOGRAPHER • STORYTELLER • CREATIVE
            </Typography>

            {/* Name */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "5.5rem" },
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              LLOYD NDEBELE
            </Typography>

            {/* Quote */}
            <Typography
              variant="h6"
              sx={{
                maxWidth: 500,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              “Capturing emotions in motion — one frame at a time.”
            </Typography>

            {/* Modern CTA Buttons */}
            <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "50px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    letterSpacing: "0.02em",
                    boxShadow: "0 0 15px rgba(255,255,255,0.05)",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.25)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: "50px",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(8px)",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    letterSpacing: "0.02em",
                    "&:hover": {
                      borderColor: "#fff",
                      background: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </Stack>
          </Stack>
        </motion.div>
      </Box>

      {/* Scroll Cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <ChevronDown size={32} color="white" opacity={0.8} />
      </motion.div>
      {/* Bottom Gradient Fade */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "110px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
          zIndex: 2,
        }}
      />
    </Box>
  );
};
