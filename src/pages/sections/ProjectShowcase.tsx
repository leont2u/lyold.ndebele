import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects.data";

export default function ProjectShowcase() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  return (
    <Box
      sx={{
        backgroundColor: "#292a2d",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Carousel */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
          height: isMobile ? 380 : 480,
          mb: 6,
        }}
      >
        {projects.map((project, index) => {
          const offset =
            (index - currentIndex + projects.length) % projects.length;
          let opacity = 0;
          let scale = 0.75;
          let xOffset = 0;
          let zIndex = 1;
          let blur = "6px";

          if (offset === 0) {
            opacity = 1;
            scale = 1;
            blur = "0px";
            zIndex = 3;
          } else if (offset === 1 || offset === projects.length - 1) {
            opacity = 0.35;
            scale = 0.9;
            xOffset = offset === 1 ? 220 : -220;
            zIndex = 2;
          }

          return (
            <motion.div
              key={project.id}
              animate={{
                opacity,
                scale,
                x: xOffset,
                filter: `blur(${blur})`,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                position: "absolute",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: offset === 0 ? "pointer" : "default",
                zIndex,
                boxShadow:
                  offset === 0
                    ? "0px 25px 60px rgba(0,0,0,0.6)"
                    : "0px 15px 30px rgba(0,0,0,0.4)",
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: isMobile ? 260 : 400,
                  height: isMobile ? 360 : 460,
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            </motion.div>
          );
        })}

        {/* Navigation */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 20,
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "#fff",
            "&:hover": { backgroundColor: "#ffffff", color: "#000" },
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 20,
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "#fff",
            "&:hover": { backgroundColor: "#ffffff", color: "#000" },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Text + Button */}
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[currentIndex].id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 700 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#fff",
              mb: 1,
            }}
          >
            {projects[currentIndex].title.toUpperCase()}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              mb: 4,
              fontSize: "0.95rem",
              letterSpacing: "0.5px",
            }}
          >
            {projects[currentIndex].description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000",
              fontWeight: 700,
              px: 5,
              py: 1.3,
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              "&:hover": {
                backgroundColor: "#e2bf55",
              },
            }}
          >
            View Project
          </Button>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <Box sx={{ display: "flex", gap: 1, mt: 5 }}>
        {projects.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrentIndex(i)}
            sx={{
              width: i === currentIndex ? 24 : 10,
              height: 6,
              borderRadius: 3,
              backgroundColor:
                i === currentIndex ? "#ffffff" : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
