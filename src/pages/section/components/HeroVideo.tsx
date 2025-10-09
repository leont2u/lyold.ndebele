import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import video from "../../../assets/video/heroVideo.mp4";

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <Box
      component="video"
      ref={videoRef}
      src={video}
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
        filter: "brightness(65%)",
        zIndex: 0,
      }}
    />
  );
};
