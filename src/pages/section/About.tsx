import type React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { colors } from "../../theme/theme";

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
      component="section"
      sx={{
        bgcolor: colors.background.dark,
        color: colors.text.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Top small text */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              color: colors.text.secondary,
              letterSpacing: "0.1em",
              mb: 6,
            }}
          >
            Based in Zimbabwe🇿🇼, operating worldwide
          </Typography>

          {/* Main heading */}
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.3,
              mb: 10,
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            we are a creative collective of event producers, marketing
            specialists, art directors, designers, and strategic analysts.
          </Typography>

          {/* Bottom right-aligned paragraph */}
          <Stack
            sx={{
              maxWidth: "500px",
              ml: "auto",
              textAlign: "left",
              pr: { xs: 0, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                color: colors.text.secondary,
                mb: 1.5,
              }}
            >
              Together, we create bespoke solutions for each brand, embracing
              high-impact creativity to craft memorable, innovative experiences.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                color: colors.text.secondary,
              }}
            >
              Our diverse expertise allows us to approach each project with
              fresh eyes and deliver exceptional results. People don’t just
              attend events—they talk about them.
            </Typography>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};
