import type React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";
import { SectionContainer } from "../components/SectionContainer";
import { SectionTitle } from "../components/SectionTitle";
import { colors } from "../theme";
import profilePhoto from "../assets/images/profile-picture.JPG";

export const About: React.FC = () => {
  return (
    <SectionContainer id="about" bgcolor={colors.background.paper}>
      <SectionTitle
        title="About Me"
        subtitle="Passionate about visual storytelling and technical excellence"
      />

      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <Box
                component="img"
                src={profilePhoto}
                alt="Lloyd Ndebele"
                sx={{
                  width: "100%",
                  height: "460px",
                  display: "block",
                }}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              I'm Lloyd Ndebele, a passionate visual storyteller with expertise
              spanning documentaries, weddings, corporate events, and cinematic
              productions. My journey in videography has been driven by a love
              for capturing authentic moments and transforming them into
              compelling narratives.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              With technical skills ranging from 1st Assistant Camera work to
              professional drone piloting, I bring a comprehensive understanding
              of both the creative and technical aspects of filmmaking. Whether
              it's capturing breathtaking aerial shots or ensuring perfect focus
              on a film set, I'm committed to excellence in every frame.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              My approach combines cinematic artistry with professional
              reliability, ensuring that every project—from intimate weddings to
              large-scale corporate events—receives the attention and expertise
              it deserves. Let's create something extraordinary together.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
