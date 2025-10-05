"use client";

import type React from "react";
import { Box, Container, type ContainerProps } from "@mui/material";
import { motion } from "framer-motion";

interface SectionContainerProps extends ContainerProps {
  children: React.ReactNode;
  bgcolor?: string;
  py?: number;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  bgcolor,
  py = 10,
  ...props
}) => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: bgcolor || "background.default",
        py: { xs: py / 2, md: py },
      }}
    >
      <Container maxWidth="lg" {...props}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};
