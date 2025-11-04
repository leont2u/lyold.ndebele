import {
  Box,
  Typography,
  Container,
  IconButton,
  InputBase,
} from "@mui/material";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export default function ContactSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {/* Header */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "3rem", sm: "4rem", md: "6rem" },
            textTransform: "uppercase",
            letterSpacing: "-1px",
            color: "#fff",
            mb: 4,
          }}
        >
          Get in Touch
        </Typography>

        {/* Form */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            color: theme.palette.primary.main,
          }}
        >
          {/* Row 1 */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            <InputBase
              placeholder="Name"
              sx={{
                borderBottom: `1px solid ${theme.palette.primary.main}`,
                color: "#fff",
                fontSize: "1rem",
                pb: 1,
              }}
            />
            <InputBase
              placeholder="Company"
              sx={{
                borderBottom: `1px solid ${theme.palette.primary.main}`,
                color: "#fff",
                fontSize: "1rem",
                pb: 1,
              }}
            />
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            <InputBase
              placeholder="E-mail"
              sx={{
                borderBottom: `1px solid ${theme.palette.primary.main}`,
                color: "#fff",
                fontSize: "1rem",
                pb: 1,
              }}
            />
            <InputBase
              placeholder="Phone"
              sx={{
                borderBottom: `1px solid ${theme.palette.primary.main}`,
                color: "#fff",
                fontSize: "1rem",
                pb: 1,
              }}
            />
          </Box>

          {/* Message Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <InputBase
              placeholder="Message"
              fullWidth
              multiline
              sx={{
                color: "#fff",
                fontSize: "1rem",
                py: 1.5,
              }}
            />
            <IconButton
              type="submit"
              sx={{
                color: theme.palette.primary.main,
                "&:hover": { color: "#d4af37" },
              }}
            >
              <ArrowRight />
            </IconButton>
          </Box>
        </Box>

        {/* Footer Note */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
              textAlign: "right",
            }}
          >
            Hate contact forms? <br />
            Me too →{" "}
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
                ml: 0.5,
              }}
            >
              info@lloydndebele.com
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
