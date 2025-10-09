"use client";

import { Box, Container, Typography, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Wedding Client",
    content:
      "Complained interested discretion unaffected on stimulated apartments oh. Unpleasing resolution day course common.",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Corporate Client",
    content:
      "Door so sing when in find read of call. As distrusts behaviour abilities defective is. Never at water me might.",
    avatar: "/professional-man.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Music Video Director",
    content:
      "Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity.",
    avatar: "/professional-asian-woman.png",
  },
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="testimonials"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          ref={ref}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          {/* Left Side - Title and Decoration */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative illustration */}
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 30 Q 20 10, 35 25 L 40 20"
                    stroke=""
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path d="M 38 18 L 42 14 L 46 18 L 42 22 Z" fill="#fbbf24" />
                </svg>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                  mb: 3,
                  color: "text.primary",
                  lineHeight: 1.2,
                }}
              >
                What Our
                <br />
                Customers Says
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.7,
                  maxWidth: "400px",
                }}
              >
                Relation so in confined smallest children unpacked delicate. Why
                sir end believe uncivil respect. Always get adieus nature day
                course for common.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                View More
              </Button>
            </motion.div>
          </Box>

          {/* Right Side - Testimonial Cards */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 55%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "background.default",
                    borderRadius: 2,
                    p: 3,
                    display: "flex",
                    gap: 2.5,
                    alignItems: "flex-start",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    border: "1px solid",
                    borderColor: "divider",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "4px",
                      bgcolor: "secondary.main",
                      borderRadius: "4px 0 0 4px",
                    },
                  }}
                >
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 56,
                      height: 56,
                      flexShrink: 0,
                    }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 0.25,
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            color: "text.secondary",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>

                      <Quote
                        size={24}
                        style={{
                          color: "#e5e7eb",
                          flexShrink: 0,
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
