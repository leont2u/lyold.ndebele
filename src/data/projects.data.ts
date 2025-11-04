import background from "../assets/images/background.jpg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Corporate Campaign",
    category: "Cinematography",
    image: background,
    description:
      "A compelling visual narrative showcasing brand values and corporate vision.",
  },
  {
    id: 2,
    title: "Music Video Production",
    category: "Video Editing",
    image: background,
    description:
      "High-energy cinematography with dynamic camera movements and color grading.",
  },
  {
    id: 3,
    title: "Documentary Series",
    category: "Cinematography",
    image: background,
    description:
      "In-depth documentary capturing authentic human stories through cinematic visuals.",
  },
  {
    id: 4,
    title: "Documentary Series",
    category: "Cinematography",
    image: background,
    description:
      "In-depth documentary capturing authentic human stories through cinematic visuals.",
  },
  {
    id: 5,
    title: "Documentary Series",
    category: "Cinematography",
    image: background,
    description:
      "In-depth documentary capturing authentic human stories through cinematic visuals.",
  },
  {
    id: 6,
    title: "Documentary Series",
    category: "Cinematography",
    image: background,
    description:
      "In-depth documentary capturing authentic human stories through cinematic visuals.",
  },
  {
    id: 7,
    title: "Documentary Series",
    category: "Cinematography",
    image: background,
    description:
      "In-depth documentary capturing authentic human stories through cinematic visuals.",
  },
  {
    id: 8,
    title: "Documentary Series",
    category: "Cinematography",
    image: background,
    description:
      "In-depth documentary capturing authentic human stories through cinematic visuals.",
  },
];
