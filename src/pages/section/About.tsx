import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { colors } from "../../theme/theme";
import { Camera, Film, Award } from "lucide-react";

const stats = [
  { icon: Camera, label: "Projects Completed", value: "50+" },
  { icon: Film, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Awards Won", value: "10+" },
];

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.dark,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Image Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -20,
                    left: -20,
                    right: 20,
                    bottom: 20,
                    border: `2px solid ${colors.accent}`,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7385.JPG-ntgz5QOdibwwcQWVusem4asxLGVsit.jpeg"
                  alt="About Me"
                  sx={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Content Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{ mb: 3, color: colors.text.primary }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, color: colors.text.secondary }}
              >
                I'm a passionate cinematographer and visual storyteller
                dedicated to capturing authentic moments that tell compelling
                stories. With years of experience in both photography and
                videography, I bring a unique perspective to every project.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, color: colors.text.secondary }}
              >
                My work spans across various genres including commercial
                productions, documentaries, events, and creative projects. I
                believe in the power of visual storytelling to connect, inspire,
                and move audiences.
              </Typography>

              {/* Stats */}
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Box sx={{ textAlign: "center" }}>
                        <stat.icon
                          size={32}
                          color={colors.accent}
                          style={{ marginBottom: 8 }}
                        />
                        <Typography
                          variant="h3"
                          sx={{ color: colors.accent, mb: 1 }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: colors.text.secondary }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
