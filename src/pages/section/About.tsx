import React, { useRef } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#121212",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Image Grid */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gridTemplateRows: "auto",
                gap: 2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <Box
                  component="img"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7385.JPG-ntgz5QOdibwwcQWVusem4asxLGVsit.jpeg"
                  alt="Camera work"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Box
                    component="img"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4188.JPG-OzUIl2qEN21isLGv5AtW6hGIEpnSY9.jpeg"
                    alt="Behind the scenes"
                    sx={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Box
                    component="img"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4182.JPG-44aqNvDNUPjzYGp2fHL5h9N3iJr0AP.jpeg"
                    alt="Photographer at work"
                    sx={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                </motion.div>
              </Box>
            </Box>
          </Grid>

          {/* Right Text Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  p: { xs: 4, sm: 6 },
                  maxWidth: 450,
                  ml: { md: 4 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  About me
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#bbb",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur facilisis felis eget sem porttitor pharetra. Ut
                  ornare felis lacus, quis posuere lacus placerat sit amet.
                  Integer non mi in elit lacinia.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 3,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#e5e5e5",
                    },
                  }}
                >
                  Learn more
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
