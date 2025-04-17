import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy testimonials
const testimonials = [
  {
    name: "Akash Gupta",
    text: "I had a lovely experience with City X Ray. The staff is very friendly and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ravi Sharma",
    text: "Clean place, polite staff and fast service. Very impressed with the professionalism.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Neeraj Verma",
    text: "They give special attention to elderly people and pregnant ladies. Great work!",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

const Testimonial = () => {
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
  };

  const handleAvatarClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: "#f9fafc" }}>
      <Typography variant="h4" fontWeight="bold" mb={5}>
        Testimonial
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* Video section */}
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 400,
            height: 600,
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#000",
            flexShrink: 0,
          }}
        >
          <video
            ref={videoRef}
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Video controls */}
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 2,
              p: 1,
            }}
          >
            <IconButton onClick={togglePlay} sx={{ color: "white" }}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton onClick={toggleMute} sx={{ color: "white" }}>
              {isMuted ? <VolumeOff /> : <VolumeUp />}
            </IconButton>
            <IconButton onClick={handleFullscreen} sx={{ color: "white" }}>
              <Fullscreen />
            </IconButton>
          </Box>
        </Paper>

        {/* Text & avatars section */}
        <Box sx={{ flex: 1, minHeight: 250 }}>
          <Box sx={{ minHeight: 180 }}>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((item, i) => (
                <Box key={i} sx={{ pr: 2 }}>
                  <Typography
                    variant="h1"
                    sx={{ fontSize: "60px", color: "#f8e8b8" }}
                  >
                    “
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Slider>
          </Box>

          {/* Avatars for switching */}
          <Stack direction="row" spacing={-1.5} mt={4}>
            {testimonials.map((item, index) => (
              <Avatar
                key={index}
                src={item.avatar}
                onClick={() => handleAvatarClick(index)}
                sx={{
                  cursor: "pointer",
                  border: "2px solid #ccc",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    borderColor: "#f8e8b8",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
