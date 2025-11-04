import type React from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Container,
} from "@mui/material";
import { Menu } from "lucide-react";

export const Navbar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: theme.palette.background.default,
        py: 3,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            color: theme.palette.primary.main,
          }}
        >
          Creative Flux Co.
        </Typography>

        <IconButton sx={{ color: theme.palette.primary.main }}>
          <Menu size={24} />
        </IconButton>
      </Container>
    </Box>
  );
};
