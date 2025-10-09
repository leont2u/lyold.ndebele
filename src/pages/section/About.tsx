"use client";

import type React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Camera, Film, Award, Users } from "lucide-react";

const stats = [
  { icon: Camera, label: "Projects Completed", value: "150+" },
  { icon: Film, label: "Years Experience", value: "8+" },
  { icon: Award, label: "Awards Won", value: "12" },
  { icon: Users, label: "Happy Clients", value: "80+" },
];

export const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "#0a0a0a",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Crafting Meaningful Brands & Intuitive Visual Experiences That
              Stand Out
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              I'm Lloyd, a Zimbabwe-based Cinematographer and Video Editor
              passionate about crafting visually compelling identities and
              seamless visual experiences. With a strategic approach and a keen
              eye for detail, I help businesses stand out and connect with their
              audience. Let's create something remarkable together.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Content Grid */}
        <Grid container spacing={6} alignItems="center">
          {/* Left: Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  aspectRatio: "3/4",
                }}
              >
                <Box
                  component="img"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7385.JPG-4v1mqYsqpOnDhGUkdprX7WrbDa3uAD.jpeg"
                  alt="Lloyd Ndebele at work"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background:
                      "linear-gradient(to top, rgba(10,10,10,0.9), transparent)",
                  }}
                />

                {/* Floating Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    bgcolor: "rgba(255, 107, 53, 0.9)",
                    backdropFilter: "blur(10px)",
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    8+ Years Experience
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Stats Grid */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: 3,
                        p: 4,
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          borderColor: "#ff6b35",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          bgcolor: "rgba(255, 107, 53, 0.1)",
                          mb: 2,
                        }}
                      >
                        <stat.icon size={28} color="#ff6b35" />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "2.5rem",
                          fontWeight: 700,
                          mb: 1,
                          color: "#fff",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.875rem",
                          color: "rgba(255, 255, 255, 0.6)",
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                  }}
                >
                  My journey in filmmaking began with a simple camera and an
                  insatiable curiosity to capture the world through a lens. As a
                  First Assistant Camera professional, I've worked on diverse
                  projects ranging from corporate videos to cinematic
                  productions, combining technical precision with creative
                  vision.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
