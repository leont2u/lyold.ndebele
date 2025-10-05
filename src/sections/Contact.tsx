import type React from "react";
import { useState } from "react";
import { Typography, Grid, TextField, Box, Alert } from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { SectionTitle } from "../components/SectionTitle";
import { AnimatedButton } from "../components/AnimatedButton";
import { colors } from "../theme";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lloyd@example.com",
      link: "mailto:lloyd@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      link: null,
    },
  ];

  return (
    <SectionContainer id="contact" bgcolor={colors.background.paper}>
      <SectionTitle
        title="Get In Touch"
        subtitle="Let's discuss your next project and bring your vision to life"
      />

      <Grid container spacing={6}>
        {/* Contact Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
              }}
            >
              Contact Information
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{
                mb: 4,
                lineHeight: 1.7,
              }}
            >
              Ready to start your next project? Reach out and let's create
              something extraordinary together. I'm available for freelance
              work, collaborations, and new opportunities.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    component={item.link ? "a" : "div"}
                    href={item.link || undefined}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "color 0.3s ease",
                      "&:hover": item.link
                        ? {
                            color: "secondary.main",
                          }
                        : {},
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: colors.background.cream,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={20} color={colors.secondary.main} />
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.875rem" }}
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: colors.background.cream,
                p: { xs: 3, md: 4 },
                borderRadius: 2,
              }}
            >
              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! I'll get back to you soon.
                </Alert>
              )}

              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      bgcolor: "background.paper",
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      bgcolor: "background.paper",
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      bgcolor: "background.paper",
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{
                      bgcolor: "background.paper",
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <AnimatedButton
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send size={18} />}
                    sx={{
                      bgcolor: "secondary.main",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "secondary.dark",
                      },
                    }}
                  >
                    Send Message
                  </AnimatedButton>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
