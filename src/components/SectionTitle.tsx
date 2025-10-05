"use client";

import type React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 2,
            fontSize: { xs: "2rem", md: "2.75rem" },
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: align === "center" ? "auto" : 0,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </motion.div>
    </Box>
  );
};
