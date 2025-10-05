import React, { useState } from "react";
import { Box, Container, Typography, Grid, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../theme/theme";
import { projects } from "../data/projects.data";
import { ProjectCard } from "./ProjectCard";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.dark,
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: "center",
              color: colors.text.primary,
            }}
          >
            My Gallery
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              textAlign: "center",
              color: colors.text.secondary,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            A collection of my recent work spanning photography, videography,
            and creative projects
          </Typography>
        </motion.div>

        {/* Category Filter */}
        <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            sx={{
              "& .MuiTab-root": {
                color: colors.text.secondary,
                fontSize: "0.95rem",
                letterSpacing: "0.1em",
                "&.Mui-selected": {
                  color: colors.accent,
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: colors.accent,
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={project.id}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
