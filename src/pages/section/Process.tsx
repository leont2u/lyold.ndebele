import type React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { colors } from "../../theme/theme";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
const processSteps: ProcessStep[] = [
  {
    number: "01.",
    title: "Project Discovery",
    description:
      "I start by understanding your vision, objectives, and the story you want to tell, so every project has a clear direction.",
  },
  {
    number: "02.",
    title: "Concept & Planning",
    description:
      "I develop creative concepts and plan the shoot, including storyboarding, shot lists, and visual style to bring your ideas to life.",
  },
  {
    number: "03.",
    title: "Filming & Production",
    description:
      "I capture high-quality visuals using professional cameras (Blackmagic, Sony, Canon) and drones, ensuring cinematic storytelling.",
  },
  {
    number: "04.",
    title: "Editing & Post-Production",
    description:
      "I craft the final story in Premiere Pro, DaVinci Resolve, and After Effects, adding polish, motion, and visual effects for maximum impact.",
  },
];

export const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="process"
      component="section"
      sx={{
        bgcolor: colors.background.dark,
        color: colors.text.primary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: "1400px", md: "1200px" },
              display: { xs: "none", md: "block" },
            }}
          >
            {/* SVG Curved Path */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 1200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <motion.path
                d="M 400 50 Q 600 150, 550 350 T 250 650 T 550 950 T 400 1150"
                stroke={colors.accent}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            {/* Process Steps Positioned Along Curve */}
            {/* Step 1 - Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                position: "absolute",
                top: "8%",
                right: "15%",
              }}
            >
              <Box sx={{ textAlign: "right", maxWidth: 280 }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: colors.text.primary,
                    mb: 1,
                  }}
                >
                  {processSteps[0].number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: colors.text.primary,
                    mb: 1,
                    textTransform: "lowercase",
                  }}
                >
                  {processSteps[0].title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {processSteps[0].description}
                </Typography>
              </Box>
            </motion.div>

            {/* Step 2 - Middle Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                position: "absolute",
                top: "32%",
                left: "8%",
              }}
            >
              <Box sx={{ textAlign: "left", maxWidth: 280 }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: colors.text.primary,
                    mb: 1,
                  }}
                >
                  {processSteps[1].number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: colors.text.primary,
                    mb: 1,
                    textTransform: "lowercase",
                  }}
                >
                  {processSteps[1].title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {processSteps[1].description}
                </Typography>
              </Box>
            </motion.div>

            {/* Step 3 - Lower Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                position: "absolute",
                top: "58%",
                right: "8%",
              }}
            >
              <Box sx={{ textAlign: "right", maxWidth: 280 }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: colors.text.primary,
                    mb: 1,
                  }}
                >
                  {processSteps[2].number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: colors.text.primary,
                    mb: 1,
                    textTransform: "lowercase",
                  }}
                >
                  {processSteps[2].title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {processSteps[2].description}
                </Typography>
              </Box>
            </motion.div>

            {/* Step 4 - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{
                position: "absolute",
                top: "82%",
                left: "15%",
              }}
            >
              <Box sx={{ textAlign: "left", maxWidth: 280 }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: colors.text.primary,
                    mb: 1,
                  }}
                >
                  {processSteps[3].number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: colors.text.primary,
                    mb: 1,
                    textTransform: "lowercase",
                  }}
                >
                  {processSteps[3].title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {processSteps[3].description}
                </Typography>
              </Box>
            </motion.div>
          </Box>

          {/* Mobile Version - Stacked */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    mb: 6,
                    pb: 6,
                    borderBottom:
                      index < processSteps.length - 1
                        ? `1px solid ${colors.accent}`
                        : "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 300,
                      color: colors.text.primary,
                      mb: 1,
                    }}
                  >
                    {step.number}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: colors.text.primary,
                      mb: 2,
                      textTransform: "lowercase",
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: colors.text.secondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
