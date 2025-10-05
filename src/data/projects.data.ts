export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  isVideo?: boolean;
  tags: string[];
  link?: string;
}

// Easy to update - just add new projects here
export const projects: Project[] = [
  {
    id: "1",
    title: "Corporate Brand Documentary",
    category: "Documentaries",
    description:
      "A compelling story showcasing innovation and company culture through cinematic storytelling.",
    thumbnail: "/corporate-documentary-film.jpg",
    videoUrl: "", // Add your video URL here
    isVideo: false,
    tags: ["Documentary", "Corporate", "Editing"],
    link: "#",
  },
  {
    id: "2",
    title: "Wedding Highlight Reel",
    category: "Weddings",
    description:
      "Capturing the magic and emotion of a beautiful wedding day with cinematic drone shots.",
    thumbnail: "/elegant-wedding-cinematography.jpg",
    videoUrl: "", // Add your video URL here
    isVideo: false,
    tags: ["Wedding", "Drone", "Videography"],
    link: "#",
  },
  {
    id: "3",
    title: "Tech Conference Coverage",
    category: "Corporate Events",
    description:
      "Multi-camera event coverage with dynamic editing and motion graphics.",
    thumbnail: "/tech-conference-event.png",
    videoUrl: "", // Add your video URL here
    isVideo: false,
    tags: ["Corporate", "Events", "Editing"],
    link: "#",
  },
  {
    id: "4",
    title: "YouTube Series Production",
    category: "YouTube Content",
    description:
      "End-to-end production for a successful YouTube channel with consistent branding.",
    thumbnail: "/youtube-content-production.jpg",
    videoUrl: "", // Add your video URL here
    isVideo: false,
    tags: ["YouTube", "Editing", "Videography"],
    link: "#",
  },
  {
    id: "5",
    title: "Short Film Project",
    category: "Films",
    description:
      "Narrative short film with professional camera work and color grading.",
    thumbnail: "/cinematic-short-film.png",
    videoUrl: "", // Add your video URL here
    isVideo: false,
    tags: ["Film", "1st AC", "Editing"],
    link: "#",
  },
  {
    id: "6",
    title: "Aerial Landscape Showcase",
    category: "Drone Piloting",
    description:
      "Stunning aerial cinematography capturing breathtaking landscapes and architecture.",
    thumbnail: "/aerial-drone-landscape.jpg",
    videoUrl: "", // Add your video URL here
    isVideo: false,
    tags: ["Drone", "Videography"],
    link: "#",
  },
];

// Service categories for easy updates
export const services = [
  {
    title: "Documentaries",
    description:
      "Compelling visual narratives that tell authentic stories with cinematic quality.",
    icon: "Film",
  },
  {
    title: "Short Form Content",
    description:
      "Engaging social media content optimized for maximum impact and shareability.",
    icon: "Smartphone",
  },
  {
    title: "Weddings",
    description:
      "Capturing your special day with elegance, emotion, and cinematic artistry.",
    icon: "Heart",
  },
  {
    title: "Corporate Events",
    description:
      "Professional event coverage with multi-camera setups and expert editing.",
    icon: "Briefcase",
  },
  {
    title: "YouTube Content",
    description:
      "Full production services for YouTube creators, from concept to final edit.",
    icon: "Youtube",
  },
  {
    title: "Films",
    description:
      "Narrative filmmaking with professional camera department and post-production.",
    icon: "Clapperboard",
  },
  {
    title: "Drone Piloting",
    description:
      "Licensed drone operations for stunning aerial cinematography and photography.",
    icon: "Plane",
  },
  {
    title: "1st Assistant Camera",
    description:
      "Professional focus pulling and camera department support for film productions.",
    icon: "Camera",
  },
  {
    title: "Videography",
    description:
      "Expert camera operation across all formats and production types.",
    icon: "Video",
  },
  {
    title: "Editing",
    description:
      "Professional post-production with color grading, sound design, and motion graphics.",
    icon: "Scissors",
  },
];

// Testimonials for easy updates
export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Innovations Inc.",
    quote:
      "Lloyd's documentary work exceeded our expectations. His ability to capture our company culture was remarkable.",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Groom",
    company: "Wedding Client",
    quote:
      "Our wedding video was absolutely stunning. Lloyd captured every moment beautifully with his drone work.",
    avatar: "/professional-man.jpg",
  },
  {
    id: "3",
    name: "Emma Williams",
    role: "Content Creator",
    company: "YouTube Channel",
    quote:
      "Working with Lloyd transformed my YouTube channel. His editing skills and creative vision are top-notch.",
    avatar: "/content-creator-woman.png",
  },
];
