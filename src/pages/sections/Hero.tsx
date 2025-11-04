import type React from "react";
import { Box, Container, Typography, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Navbar } from "../../components/NavBar";

export const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        pt: { xs: 12, md: 14 },
      }}
    >
      <Navbar />

      {/* Hero Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          height: "100vh",
        }}
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", sm: "4rem", md: "8rem" },
              textTransform: "none",
              lineHeight: { xs: 1.1, md: 0.9 },
              color: theme.palette.primary.main,
            }}
          >
            Lloyd Ndebele<span style={{ fontSize: "2rem" }}>®</span>
          </Typography>
        </motion.div>

        {/* Subtitle Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, sm: 6 }}
          sx={{
            mt: { xs: 4, md: 8 },
            color: theme.palette.primary.main,
            px: { xs: 2, sm: 0 },
          }}
        >
          {[
            {
              title: "©2025",
              description:
                "Cinematographer crafting immersive visuals that connect, move, and inspire.",
            },
            {
              title: "Brand",
              description:
                "I create distinctive, story-driven visual identities that make lasting impressions.",
            },
            {
              title: "Film & Editing",
              description:
                "Seamless storytelling and cinematic editing designed to evoke emotion and impact.",
            },
          ].map((item, index) => (
            <Box key={index} textAlign="center">
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  color: theme.palette.primary.main,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  maxWidth: { xs: 260, sm: 280 },
                  mx: "auto",
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  lineHeight: 1.4,
                  color: theme.palette.text.secondary,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
