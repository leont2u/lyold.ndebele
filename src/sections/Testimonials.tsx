import type React from "react";
import { useState } from "react";
import { Typography, Box, Avatar, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { SectionTitle } from "../components/SectionTitle";
import { testimonials } from "../data/projects.data";
import { colors } from "../theme";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <SectionContainer id="testimonials" bgcolor={colors.background.cream}>
      <SectionTitle
        title="Testimonials"
        subtitle="What clients say about working with me"
      />

      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          position: "relative",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: { xs: 4, md: 6 },
                boxShadow: 3,
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Quote Icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 20, md: 30 },
                  left: { xs: 20, md: 30 },
                  opacity: 0.1,
                }}
              >
                <Quote size={64} color={colors.secondary.main} />
              </Box>

              {/* Avatar */}
              <Avatar
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 3,
                  boxShadow: 2,
                }}
              />

              {/* Quote */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  mb: 3,
                  color: "text.primary",
                }}
              >
                "{currentTestimonial.quote}"
              </Typography>

              {/* Author */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                {currentTestimonial.name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "0.95rem",
                }}
              >
                {currentTestimonial.role}
                {currentTestimonial.company &&
                  ` • ${currentTestimonial.company}`}
              </Typography>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <IconButton
            onClick={handlePrevious}
            sx={{
              bgcolor: "background.paper",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "background.paper",
                transform: "scale(1.1)",
              },
              transition: "transform 0.2s ease",
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              bgcolor: "background.paper",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "background.paper",
                transform: "scale(1.1)",
              },
              transition: "transform 0.2s ease",
            }}
          >
            <ChevronRight size={24} />
          </IconButton>
        </Box>

        {/* Dots Indicator */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 3,
          }}
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor:
                  index === currentIndex ? "secondary.main" : colors.divider,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </SectionContainer>
  );
};
