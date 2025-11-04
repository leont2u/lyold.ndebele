"use client";
import { Box, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#292a2d",
        padding: { xs: "40px 20px", md: "60px" },

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: "30px", md: "0" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "0.7rem", md: "0.85rem" },
          color: "#ffffff",
          letterSpacing: "1px",
        }}
      >
        © 2025 Lloyd Ndebele. All rights reserved.
      </Typography>

      <Box sx={{ display: "flex", gap: { xs: "20px", md: "30px" } }}>
        <Facebook size={20} color="#ffffff" style={{ cursor: "pointer" }} />
        <Twitter size={20} color="#ffffff" style={{ cursor: "pointer" }} />
        <Instagram size={20} color="#ffffff" style={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
}
