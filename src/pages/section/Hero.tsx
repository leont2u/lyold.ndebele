import React from "react";
import { Box, Button, Typography, Stack, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import heroVideo from "../../assets/video/heroVideo.mp4";
import { WhatsApp } from "@mui/icons-material";

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <WhatsApp size={22} />, href: "https://wa.me/263783638876" },
    { icon: <Linkedin size={22} />, href: "https://linkedin.com" },
    { icon: <Instagram size={22} />, href: "https://instagram.com" },
    { icon: <Facebook size={22} />, href: "https://facebook.com" },
  ];

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
      {/* Background Video */}
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
          filter: "brightness(65%)",
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to left, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* Camera Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4],
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

      {/* 🎯 Left-side Animated Social Icons */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "10px", md: "40px" },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          ml: 10,
        }}
      >
        {/* Vertical Gold Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "120px" }}
          transition={{ duration: 1 }}
          style={{
            width: "2px",
            backgroundColor: "rgba(255,255,255,0.4)",

            marginBottom: "10px",
          }}
        />

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Stack spacing={2} alignItems="center">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.2,
                  y: -2,
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconButton
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",

                    background: "rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#d4af37",
                      borderColor: "#d4af37",
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "120px" }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            width: "2px",
            backgroundColor: "rgba(255,255,255,0.4)",
            marginTop: "10px",
          }}
        />
      </Box>

      {/* Content (Right Side) */}
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

            {/* Buttons */}
            {/* <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
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
            </Stack> */}
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
