import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects.data.js";

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
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
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

          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 20,
              backgroundColor: "rgba(255,255,255,0.08)",
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
              },
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
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
              },
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
            style={{ maxWidth: 700, width: "100%" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                letterSpacing: "3px",
                color: theme.palette.primary.main,
                mb: 1,
              }}
            >
              {projects[currentIndex].title.toUpperCase()}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                display: "block",
              }}
            >
              {projects[currentIndex].description}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
                fontWeight: 700,
                px: 5,
                py: 1.3,
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  opacity: 0.9,
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
                  i === currentIndex
                    ? theme.palette.primary.main
                    : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
