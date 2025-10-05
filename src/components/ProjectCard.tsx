import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { colors } from "../theme/theme";
import type { Project } from "../data/projects.data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.mediaType === "video" && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (project.mediaType === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          height: { xs: 300, md: 400 },
          backgroundColor: colors.background.card,
        }}
      >
        {/* Media Content */}
        {project.mediaType === "image" ? (
          <Box
            component="img"
            src={project.mediaUrl}
            alt={project.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        ) : (
          <>
            <Box
              component="video"
              ref={videoRef}
              src={project.mediaUrl}
              loop
              muted
              playsInline
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {!isHovered && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              >
                <Play size={48} color={colors.text.primary} />
              </Box>
            )}
          </>
        )}

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to top, ${colors.background.dark} 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0.7,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Content Overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "24px",
            zIndex: 3,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: colors.text.primary,
              mb: 1,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, mb: 1 }}
          >
            {project.description}
          </Typography>
          <Box sx={{ color: colors.text.secondary, display: "flex" }}>
            <Typography>View Project</Typography>
            <ArrowUpRight />
          </Box>
        </motion.div>

        {/* Static Info (visible when not hovered) */}
        {!isHovered && (
          <Box
            sx={{
              position: "absolute",
              bottom: 24,
              left: 24,
              zIndex: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: colors.text.primary,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              {project.title}
            </Typography>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};
