"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  useTheme,
} from "@mui/material";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.primary.main,
              mb: { xs: 2, md: 3 },
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              color: theme.palette.primary.main,
              letterSpacing: "2px",
              mb: { xs: 3, md: 5 },
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: theme.palette.text.secondary,
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            Interested in collaborating or want to discuss your project? Reach
            out to me through any of these channels.
          </Typography>
        </Box>

        {/* Contact Info & Form */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 12 },
          }}
        >
          {/* Contact Information */}
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "lloyd.ndebele@example.com",
                },
                { Icon: Phone, label: "Phone", value: "+27 (0) 123 456 789" },
                { Icon: MapPin, label: "Location", value: "South Africa" },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                >
                  <item.Icon
                    size={24}
                    color={theme.palette.primary.main}
                    style={{ marginTop: "4px", flexShrink: 0 }}
                  />
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: theme.palette.primary.main,
                        mb: 1,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Contact Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            {[
              { placeholder: "Your Name" },
              { placeholder: "Your Email" },
              { placeholder: "Subject" },
            ].map((field, index) => (
              <TextField
                key={index}
                placeholder={field.placeholder}
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: theme.palette.primary.main,
                    "& fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                    "&:hover fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: theme.palette.primary.main,
                    opacity: 0.5,
                  },
                }}
              />
            ))}
            <TextField
              placeholder="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: theme.palette.primary.main,
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: theme.palette.primary.main,
                  opacity: 0.5,
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "14px 40px",
                borderRadius: "25px",
                mt: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  opacity: 0.9,
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
