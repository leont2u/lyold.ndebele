import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data/projects.data";

export const Gallery: React.FC = () => {
  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 8, md: 10 },
        width: "100vw",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Projects
          </Typography>
        </motion.div>

        {/* Grid */}
        <Grid container spacing={2}>
          {projects.map((project, index) => {
            const gridSize =
              index === 6
                ? { xs: 12, sm: 12, md: 8 }
                : index === 7
                ? { xs: 12, sm: 12, md: 4 }
                : { xs: 12, sm: 6, md: 4 };

            // Check if media is a video
            const isVideo = project.mediaUrl?.match(/\.(mp4|mov|webm)$/i);

            return (
              <Grid
                key={project.id || index}
                size={gridSize}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "100%",
                    height: "240px",
                    cursor: "pointer",
                  }}
                >
                  {/* Conditionally render video or image */}
                  {isVideo ? (
                    <Box
                      component="video"
                      src={project.mediaUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={project.mediaUrl}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                  )}

                  {/* Overlay Text */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60px",
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "1rem",
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
