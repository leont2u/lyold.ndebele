"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Avatar, Container, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Leon Manhimanzi",
    image: "/reviews/lauren.jpg",
    rating: 4.9,
    date: "29 Aug, 2017",
    text: "Mukumana anopedza zvake",
  },
  {
    id: 2,
    name: "Edward Alexander",
    image: "/reviews/edward.jpg",
    rating: 5.0,
    date: "29 Aug, 2017",
    text: "Exceptional support and top-notch quality. The entire process was seamless and enjoyable. Highly recommend working with this team!",
  },
  {
    id: 3,
    name: "Diana Johnston",
    image: "/reviews/diana.jpg",
    rating: 4.9,
    date: "29 Aug, 2017",
    text: "Professional, creative, and responsive! I loved the final outcome and how easy the communication was from start to finish.",
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    image: "/reviews/sarah.jpg",
    rating: 4.8,
    date: "29 Aug, 2017",
    text: "Wonderful collaboration and attention to detail. They really understood what I was aiming for and brought it to life beautifully.",
  },
  {
    id: 5,
    name: "Chris Daniels",
    image: "/reviews/chris.jpg",
    rating: 5.0,
    date: "29 Aug, 2017",
    text: "Top-tier design and service. Everything was delivered on time with outstanding quality. Highly professional team.",
  },
  {
    id: 6,
    name: "Amelia Thompson",
    image: "/reviews/amelia.jpg",
    rating: 4.9,
    date: "29 Aug, 2017",
    text: "They go above and beyond expectations. Loved every part of the experience!",
  },
];

export default function CustomerReviewsSection() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Visible reviews: current + one above + one below
  const visibleIndexes = [
    (index - 1 + reviews.length) % reviews.length,
    index,
    (index + 1) % reviews.length,
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: { xs: 10, md: 7 },
        px: { xs: 3, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Left Side — Curved Reviewer list */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            height: 400,
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 300,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: 1000,
            }}
          >
            {reviews.map((review, i) => {
              const isVisible = visibleIndexes.includes(i);
              const position = visibleIndexes.indexOf(i);

              // Define positions along a curve
              const yOffset = position === 0 ? -90 : position === 1 ? 0 : 90;
              const xOffset = position === 1 ? 0 : position === 0 ? -60 : 60;
              const scale = position === 1 ? 1 : 0.8;
              const opacity = isVisible ? (position === 1 ? 1 : 0.5) : 0;
              const zIndex = position === 1 ? 3 : 1;

              return (
                <motion.div
                  key={review.id}
                  animate={{
                    x: isVisible ? xOffset : 0,
                    y: isVisible ? yOffset : 0,
                    opacity,
                    scale,
                    zIndex,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => setIndex(i)}
                >
                  <Avatar
                    src={review.image}
                    alt={review.name}
                    sx={{
                      width: 60,
                      height: 60,
                      border:
                        i === index
                          ? `2px solid ${theme.palette.primary.main}`
                          : "2px solid transparent",
                      boxShadow:
                        i === index
                          ? `0px 0px 15px ${theme.palette.primary.main}33`
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                  {i === index && (
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {review.name}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Star
                          size={14}
                          color={theme.palette.warning.main}
                          fill={theme.palette.warning.main}
                        />
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          {review.rating} on {review.date}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </motion.div>
              );
            })}
          </Box>
        </Box>

        {/* Right Side — Animated Quote */}
        <Box sx={{ flex: 1, textAlign: "left", minHeight: 180 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "serif",
                  fontSize: "4rem",
                  color: theme.palette.primary.main,
                  lineHeight: 0.6,
                  mb: -2,
                }}
              >
                “
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.8,
                }}
              >
                {reviews[index].text}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
