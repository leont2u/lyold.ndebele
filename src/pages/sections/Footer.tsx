"use client";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 4, md: 0 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "0.7rem", md: "0.85rem" },
            letterSpacing: "1px",
          }}
        >
          © 2025 Lloyd Ndebele. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: { xs: 3, md: 4 } }}>
          <Facebook
            size={20}
            color={theme.palette.primary.main}
            style={{ cursor: "pointer" }}
          />
          <Twitter
            size={20}
            color={theme.palette.primary.main}
            style={{ cursor: "pointer" }}
          />
          <Instagram
            size={20}
            color={theme.palette.primary.main}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
