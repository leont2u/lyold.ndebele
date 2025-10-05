import type React from "react";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  Film,
  Smartphone,
  Heart,
  Briefcase,
  Youtube,
  Clapperboard,
  Plane,
  Camera,
  Video,
  Scissors,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { SectionTitle } from "../components/SectionTitle";
import { services } from "../data/projects.data";
import { colors } from "../theme";

const iconMap: Record<string, LucideIcon> = {
  Film,
  Smartphone,
  Heart,
  Briefcase,
  Youtube,
  Clapperboard,
  Plane,
  Camera,
  Video,
  Scissors,
};

export const Services: React.FC = () => {
  return (
    <SectionContainer id="services" bgcolor={colors.background.cream}>
      <SectionTitle
        title="Services"
        subtitle="Comprehensive video production services tailored to your needs"
      />

      <Grid container spacing={4}>
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  component={motion.div}
                  whileHover={{
                    y: -8,
                    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    height: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 2,
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        bgcolor: colors.background.cream,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          size={32}
                          color={colors.secondary.main}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};
