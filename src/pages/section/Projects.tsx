"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Modal,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { colors } from "../../theme/theme";
import background from "../../assets/images/background.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Shoot",
    category: "Cinematography",
    image: background,
    description: "A stunning commercial project showcasing brand storytelling.",
  },
  {
    id: 2,
    title: "Documentary Film",
    category: "Video Editing",
    image: background,
    description: "Documentary exploring human stories and emotions.",
  },
  {
    id: 3,
    title: "Music Video",
    category: "Cinematography",
    image: background,
    description: "High-energy music video with creative visuals.",
  },
  {
    id: 4,
    title: "Corporate Event",
    category: "Camera Operation",
    image: background,
    description: "Professional coverage of corporate events.",
  },
  {
    id: 5,
    title: "Fashion Film",
    category: "Cinematography",
    image: background,
    description: "Elegant fashion film with artistic direction.",
  },
  {
    id: 6,
    title: "Short Film",
    category: "Video Editing",
    image: background,
    description: "Narrative short film with compelling storytelling.",
  },
  {
    id: 7,
    title: "Brand Story",
    category: "Cinematography",
    image: background,
    description: "Brand narrative bringing company values to life.",
  },
];

export const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(3);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absDiff = Math.abs(diff);

    if (isMobile && absDiff > 1) {
      return { display: "none" };
    }

    const rotateY = diff * (isMobile ? 35 : 25);
    const translateZ = absDiff === 0 ? 0 : -150 - absDiff * 50;
    const translateX = diff * (isMobile ? 120 : 180);
    const scale = absDiff === 0 ? 1 : 1 - absDiff * 0.15;
    const opacity = absDiff > 2 ? 0 : 1 - absDiff * 0.2;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 10 - absDiff,
    };
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 12, md: 16 },

        bgcolor: colors.background.dark,
        color: colors.text.primary,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.accent,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: "block",
            }}
          >
            Behind the Lens
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: colors.text.primary,
            }}
          >
            Curious What I've Worked On?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 600,
            }}
          >
            Explore my portfolio of cinematography, video editing, and camera
            work
          </Typography>
        </Box>

        {/* 3D Carousel */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 400, md: 500 },
            perspective: "1500px",
            mb: 4,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-150px",
                  marginTop: "-200px",
                  width: isMobile ? "300px" : "300px",
                  height: isMobile ? "400px" : "400px",
                  transformStyle: "preserve-3d",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  ...getCardStyle(index),
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: `0 20px 60px ${colors.background.overlay}`,
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
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
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.accent,
                        fontWeight: 600,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      {project.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.text.primary,
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", md: "1.1rem" },
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>

                  <AnimatePresence>
                    {hoveredProject === project.id &&
                      index === currentIndex && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: colors.background.overlay,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            onClick={() => setSelectedProject(project)}
                            sx={{
                              bgcolor: colors.accent,
                              color: colors.background.dark,
                              fontWeight: 600,
                              px: 4,
                              py: 1.5,
                              fontSize: "1rem",
                              "&:hover": {
                                bgcolor: colors.accent,
                                opacity: 0.9,
                              },
                            }}
                          >
                            View Project
                          </Button>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: `1px solid ${colors.accent}`,
              color: colors.text.primary,
              "&:hover": {
                backgroundColor: colors.accent,
                color: colors.background.dark,
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Indicator Dots */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {projects.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: index === currentIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    index === currentIndex
                      ? colors.accent
                      : "rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: `1px solid ${colors.accent}`,
              color: colors.text.primary,
              "&:hover": {
                backgroundColor: colors.accent,
                color: colors.background.dark,
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>

      <Modal
        open={selectedProject !== null}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "90%", md: "80%", lg: "70%" },
            maxWidth: 1000,
            bgcolor: colors.background.card,
            borderRadius: 3,
            boxShadow: 24,
            p: { xs: 3, md: 4 },
            maxHeight: "90vh",
            overflow: "auto",
            border: `1px solid ${colors.accent}`,
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: colors.text.primary,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              "&:hover": {
                bgcolor: colors.accent,
                color: colors.background.dark,
              },
            }}
          >
            <X />
          </IconButton>

          {selectedProject && (
            <Box>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 400 },
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 3,
                }}
              />

              <Typography
                variant="overline"
                sx={{
                  color: colors.accent,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  display: "block",
                  mb: 1,
                }}
              >
                {selectedProject.category}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: colors.text.primary,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                }}
              >
                {selectedProject.title}
              </Typography>

              <Typography
                sx={{
                  color: colors.text.secondary,
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {selectedProject.description}
              </Typography>

              {selectedProject.videoUrl && (
                <Box
                  component="video"
                  controls
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                  }}
                >
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};
