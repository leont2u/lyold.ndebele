import type React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { colors } from "../../theme/theme";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try emailing directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: colors.background.dark,
        color: colors.text.primary,
        py: { xs: 12, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8, display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: colors.text.primary,
              }}
            >
              GET IN TOUCH
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 800,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
                mb: 4,
              }}
            >
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    color: colors.text.primary,
                    "&:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: colors.accent,
                    },
                    "&:after": {
                      borderBottomColor: colors.accent,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.text.secondary,
                  },
                }}
              />
              <TextField
                name="surname"
                label="Surname"
                value={formData.surname}
                onChange={handleChange}
                fullWidth
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    color: colors.text.primary,
                    "&:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: colors.accent,
                    },
                    "&:after": {
                      borderBottomColor: colors.accent,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.text.secondary,
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
                mb: 4,
              }}
            >
              <TextField
                name="email"
                label="E-mail"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    color: colors.text.primary,
                    "&:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: colors.accent,
                    },
                    "&:after": {
                      borderBottomColor: colors.accent,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.text.secondary,
                  },
                }}
              />
              <TextField
                name="phone"
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    color: colors.text.primary,
                    "&:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: colors.accent,
                    },
                    "&:after": {
                      borderBottomColor: colors.accent,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.text.secondary,
                  },
                }}
              />
            </Box>

            <Box
              sx={{ mb: 4, display: "flex", alignItems: "flex-end", gap: 2 }}
            >
              <TextField
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={1}
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    color: colors.text.primary,
                    "&:before": {
                      borderBottomColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottomColor: colors.accent,
                    },
                    "&:after": {
                      borderBottomColor: colors.accent,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: colors.text.secondary,
                  },
                }}
              />
              <Button
                type="submit"
                disabled={loading}
                sx={{
                  minWidth: "auto",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  bgcolor: colors.accent,
                  color: colors.background.dark,
                  "&:hover": {
                    bgcolor: colors.accent,
                    opacity: 0.9,
                  },
                  "&:disabled": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    sx={{ color: colors.background.dark }}
                  />
                ) : (
                  <ArrowRight size={24} />
                )}
              </Button>
            </Box>

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Message sent successfully! I'll get back to you soon.
              </Alert>
            )}

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
          </Box>

          <Box
            sx={{
              mt: 8,
              textAlign: "right",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: colors.text.secondary, mb: 0.5 }}
            >
              Hate contacts forms?
            </Typography>
            <Typography variant="body2" sx={{ color: colors.text.secondary }}>
              No big deal —{" "}
              <Box
                component="a"
                href="mailto:lloydndebele@email.com"
                sx={{
                  color: colors.accent,
                  textDecoration: "underline",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                lloydndebele@email.com
              </Box>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
