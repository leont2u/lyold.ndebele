import type React from "react";
import { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { SectionTitle } from "../components/SectionTitle";
import { AnimatedButton } from "../components/AnimatedButton";
import { projects, type Project } from "../data/projects.data";
import { colors } from "../theme";

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    setSelectedCategory(newValue);
  };

  return (
    <SectionContainer id="portfolio" bgcolor={colors.background.paper}>
      <SectionTitle
        title="Portfolio"
        subtitle="A showcase of my recent work across various production types"
      />

      {/* Category Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 6,
        }}
      >
        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              color: "text.secondary",
              "&.Mui-selected": {
                color: "secondary.main",
              },
            },
            "& .MuiTabs-indicator": {
              bgcolor: "secondary.main",
            },
          }}
        >
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        component={motion.div}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 2,
          overflow: "hidden",
          cursor: "pointer",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        {/* Media Container */}
        <Box
          sx={{
            position: "relative",
            paddingTop: "66.67%", // 3:2 aspect ratio
            overflow: "hidden",
            bgcolor: colors.background.beige,
          }}
        >
          {project.isVideo && project.videoUrl ? (
            <Box
              component="video"
              autoPlay
              loop
              muted
              playsInline
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={project.videoUrl} type="video/mp4" />
            </Box>
          ) : (
            <CardMedia
              component="img"
              image={project.thumbnail}
              alt={project.title}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          )}

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatedButton
              variant="contained"
              size="small"
              startIcon={<ExternalLink size={16} />}
              sx={{
                bgcolor: "white",
                color: "text.primary",
                "&:hover": {
                  bgcolor: "background.cream",
                },
              }}
            >
              View Project
            </AnimatedButton>
          </motion.div>
        </Box>

        {/* Content */}
        <CardContent
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: colors.background.cream,
                  color: "text.secondary",
                  fontSize: "0.75rem",
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
