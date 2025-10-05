import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { colors } from "../theme/theme";

const storyImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4188.JPG-OzUIl2qEN21isLGv5AtW6hGIEpnSY9.jpeg",
    title: "The Beginning",
    description: "Where it all started",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4182.JPG-44aqNvDNUPjzYGp2fHL5h9N3iJr0AP.jpeg",
    title: "Collaboration",
    description: "Working with amazing teams",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7385.JPG-ntgz5QOdibwwcQWVusem4asxLGVsit.jpeg",
    title: "Growth",
    description: "Expanding my craft",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4190.JPG-TdzUWgrjg0W6WLXVwFvtHR65rsAF4E.jpeg",
    title: "New Heights",
    description: "Taking on bigger projects",
  },
];

export const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <Box
      id="story"
      ref={containerRef}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.primary,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: colors.text.primary,
            }}
          >
            My Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: colors.text.secondary,
              maxWidth: 600,
            }}
          >
            A visual journey through my career as a cinematographer
          </Typography>
        </motion.div>
      </Container>

      {/* Horizontal Scroll Container */}
      <motion.div
        style={{ x, display: "flex", gap: 3, paddingLeft: { xs: 2, md: 8 } }}
      >
        {storyImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 250, md: 400 },
                height: { xs: 350, md: 500 },
                flexShrink: 0,
                overflow: "hidden",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={image.url}
                alt={image.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  background: `linear-gradient(to top, ${colors.background.dark}, transparent)`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.text.primary,
                    fontSize: "1.5rem",
                    mb: 0.5,
                  }}
                >
                  {image.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: colors.text.secondary }}
                >
                  {image.description}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};
