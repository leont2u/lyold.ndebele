"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Looking for a new project? We'll find the perfect match for your vision. Know what you need already? Skip this step and find your brand.",
  },
  {
    number: "02",
    title: "Planning & Pre-Production",
    description:
      "Speak with our creative team without stepping foot in an office. Chat online to find the best approach for you and your project.",
  },
  {
    number: "03",
    title: "Production Day",
    description:
      "We'll deliver high-quality footage directly to your door — at an additional cost. Professional equipment and experienced crew.",
  },
  {
    number: "04",
    title: "Post-Production & Delivery",
    description:
      "Never stand in line at a delivery point. Manage automatic refills, get free storage for your final video anytime.",
  },
];

export const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="process"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 8,

              color: "text.primary",
            }}
          >
            My Process
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", maxWidth: "900px", mx: "auto" }}>
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: isEven ? "row" : "row-reverse",
                    },
                    alignItems: "flex-start",
                    mb: { xs: 6, md: 8 },
                    gap: { xs: 2, md: 6 },
                    position: "relative",
                  }}
                >
                  {/* Number Section */}
                  <Box
                    sx={{
                      flex: "0 0 auto",
                      width: { xs: "100%", md: "45%" },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: isEven
                        ? { xs: "flex-start", md: "flex-end" }
                        : "flex-start",
                      position: "relative",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "3rem", md: "4rem" },
                        fontWeight: 300,
                        color: "primary.main",
                        lineHeight: 1,
                        mb: 1,
                      }}
                    >
                      {step.number}
                    </Typography>

                    {/* Vertical line connector */}
                    {index < processSteps.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: isEven
                            ? { xs: "1.5rem", md: "auto" }
                            : "1.5rem",
                          right: isEven ? { xs: "auto", md: "1.5rem" } : "auto",
                          top: "4rem",
                          width: "1px",
                          height: { xs: "80px", md: "120px" },
                          bgcolor: "divider",
                          display: { xs: "none", md: "block" },
                        }}
                      />
                    )}
                  </Box>

                  {/* Content Section */}
                  <Box
                    sx={{
                      flex: "0 0 auto",
                      width: { xs: "100%", md: "45%" },
                      textAlign: isEven ? { xs: "left", md: "left" } : "left",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                        fontWeight: 600,
                        mb: 1.5,
                        color: "text.primary",
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
