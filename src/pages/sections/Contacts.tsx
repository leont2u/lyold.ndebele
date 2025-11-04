"use client";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#292a2d",
        minHeight: "100vh",
        padding: { xs: "60px 20px", sm: "80px 40px", md: "80px 60px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          marginBottom: { xs: "50px", md: "80px" },
          maxWidth: "1200px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.7rem", md: "0.85rem" },
            color: "#ffffff",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: { xs: "15px", md: "20px" },
            fontWeight: 400,
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "2px",
            marginBottom: { xs: "25px", md: "40px" },
          }}
        >
          Contact
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            color: "#ffffff",
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          Interested in collaborating or want to discuss your project? Reach out
          to me through any of these channels.
        </Typography>
      </Box>

      {/* Contact Info & Form */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "40px", md: "80px" },
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Contact Information */}
        <Box>
          <Box sx={{ marginBottom: "60px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                marginBottom: "40px",
              }}
            >
              <Mail
                size={24}
                color="#ffffff"
                style={{ marginTop: "4px", flexShrink: 0 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#ffffff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  lloyd.ndebele@example.com
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                marginBottom: "40px",
              }}
            >
              <Phone
                size={24}
                color="#ffffff"
                style={{ marginTop: "4px", flexShrink: 0 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#ffffff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  +27 (0) 123 456 789
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <MapPin
                size={24}
                color="#ffffff"
                style={{ marginTop: "4px", flexShrink: 0 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#ffffff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  South Africa
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField
            placeholder="Your Name"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#ffffff",
                "& fieldset": {
                  borderColor: "#ffffff",
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "#ffffff",
                opacity: 0.5,
              },
            }}
          />
          <TextField
            placeholder="Your Email"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#ffffff",
                "& fieldset": {
                  borderColor: "#ffffff",
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "#ffffff",
                opacity: 0.5,
              },
            }}
          />
          <TextField
            placeholder="Subject"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#ffffff",
                "& fieldset": {
                  borderColor: "#ffffff",
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "#ffffff",
                opacity: 0.5,
              },
            }}
          />
          <TextField
            placeholder="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#ffffff",
                "& fieldset": {
                  borderColor: "#ffffff",
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff",
                },
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: "#ffffff",
                opacity: 0.5,
              },
            }}
          />
          <Button
            sx={{
              backgroundColor: "#ffffff",
              color: "#292a2d",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "14px 40px",
              borderRadius: "25px",
              marginTop: "20px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
