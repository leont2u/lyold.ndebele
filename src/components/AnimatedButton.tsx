import React from "react";
import { Button, type ButtonProps } from "@mui/material";
import { motion, type MotionProps } from "framer-motion";

const MotionButton = motion(Button as any);

interface AnimatedButtonProps extends ButtonProps, MotionProps {}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  ...props
}) => (
  <MotionButton
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    {children}
  </MotionButton>
);
