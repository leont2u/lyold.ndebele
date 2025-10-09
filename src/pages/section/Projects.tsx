"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import background from "../../assets/images/background.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Shoot",
    category: "Cinematography",
    image: background,
  },
  {
    id: 2,
    title: "Documentary Film",
    category: "Video Editing",
    image: background,
  },
  {
    id: 3,
    title: "Music Video",
    category: "Cinematography",
    image: background,
  },
  {
    id: 4,
    title: "Corporate Event",
    category: "Camera Operation",
    image: background,
  },
  {
    id: 5,
    title: "Fashion Film",
    category: "Cinematography",
    image: background,
  },
  {
    id: 6,
    title: "Short Film",
    category: "Video Editing",
    image: background,
  },
  {
    id: 7,
    title: "Brand Story",
    category: "Cinematography",
    image: background,
  },
];

export const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(3);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absDiff = Math.abs(diff);

    // Don't show cards too far from center on mobile
    if (isMobile && absDiff > 1) {
      return { display: "none" };
    }

    // Calculate position and rotation
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
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
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
            }}
          >
            Curious What I've Worked On?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
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
                  width: isMobile ? "200px" : "300px",
                  height: isMobile ? "300px" : "400px",
                  transformStyle: "preserve-3d",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  ...getCardStyle(index),
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
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
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
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
                        color: "white",
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", md: "1.1rem" },
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
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
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
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
                    index === currentIndex ? "primary.main" : "divider",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};
