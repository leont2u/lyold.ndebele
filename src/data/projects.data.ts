export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  thumbnail?: string; // For videos
  tags: string[];
  date: string;
}

// Easy to add new projects - just add to this array
export const projects: Project[] = [
  {
    id: "1",
    title: "Street Lights",
    description: "Urban photography capturing the essence of city nights",
    category: "Photography",
    mediaType: "image",
    mediaUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4188.JPG-OzUIl2qEN21isLGv5AtW6hGIEpnSY9.jpeg",
    tags: ["Urban", "Night", "Cinematography"],
    date: "2024-01",
  },
  {
    id: "2",
    title: "Behind The Scenes",
    description: "Collaborative filmmaking moments",
    category: "Videography",
    mediaType: "image",
    mediaUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4182.JPG-44aqNvDNUPjzYGp2fHL5h9N3iJr0AP.jpeg",
    tags: ["BTS", "Collaboration", "Production"],
    date: "2024-02",
  },
  {
    id: "3",
    title: "Event Coverage",
    description: "Professional event documentation",
    category: "Photography",
    mediaType: "image",
    mediaUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7385.JPG-ntgz5QOdibwwcQWVusem4asxLGVsit.jpeg",
    tags: ["Events", "Professional", "Documentary"],
    date: "2024-03",
  },
  {
    id: "4",
    title: "Aviation Project",
    description: "Commercial aviation cinematography",
    category: "Videography",
    mediaType: "image",
    mediaUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4190.JPG-TdzUWgrjg0W6WLXVwFvtHR65rsAF4E.jpeg",
    tags: ["Aviation", "Commercial", "Cinematic"],
    date: "2024-04",
  },
  // Add more projects here - supports both images and videos
  // {
  //   id: '5',
  //   title: 'Sample Video Project',
  //   description: 'A looping video showcase',
  //   category: 'Videography',
  //   mediaType: 'video',
  //   mediaUrl: '/videos/sample.mp4',
  //   thumbnail: '/images/video-thumb.jpg',
  //   tags: ['Video', 'Motion'],
  //   date: '2024-05',
  // },
];
