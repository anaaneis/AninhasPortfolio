import {
  Code2,
  PenTool,
  PencilRuler,
  Users,
  FlaskConical,
  Network,
  Heart,
  Triangle,
} from "lucide-react";

// Three groups. Each group has: a label, the colour of its label, and its notes.
// A note has: name, note (small caption), color (sticky colour class),
// and EITHER a slug (brand logo from simpleicons.org) OR an Icon (a Lucide line icon)
export const toolGroups = [
  {
    group: "CODE",
    tab: "bg-sticky-blue",
    items: [
      {
        name: "React",
        slug: "react",
        note: "Front-end",
        color: "bg-sticky-blue",
      },
      {
        name: "HTML",
        slug: "html5",
        note: "Markup",
        color: "bg-sticky-orange",
      },
      { name: "CSS", slug: "css", note: "Styling", color: "bg-sticky-orange" },
      {
        name: "JavaScript",
        slug: "javascript",
        note: "Language",
        color: "bg-sticky-yellow",
      },
      {
        name: "Tailwind",
        slug: "tailwindcss",
        note: "Styling",
        color: "bg-sticky-green",
      },
      { name: "Git", slug: "git", note: "Versioning", color: "bg-sticky-pink" },
      {
        name: "VS Code",
        Icon: Code2,
        note: "Editor",
        color: "bg-sticky-violet",
      },
    ],
  },
  {
    group: "DESIGN",
    tab: "bg-sticky-pink",
    items: [
      {
        name: "Figma",
        slug: "figma",
        note: "Design tool",
        color: "bg-sticky-pink",
      },
      {
        name: "Framer",
        slug: "framer",
        note: "Design & build",
        color: "bg-sticky-violet",
      },
      {
        name: "Prototyping",
        Icon: PenTool,
        note: "Making the design seen",
        color: "bg-sticky-yellow",
      },
      {
        name: "Wireframing",
        Icon: PencilRuler,
        color: "bg-sticky-blue",
      },
      {
        name: "User research & personas",
        Icon: Users,
        note: "Understanding people",
        color: "bg-sticky-green",
      },
      {
        name: "Usability testing",
        Icon: FlaskConical,
        note: "Testing until it works",
        color: "bg-sticky-orange",
      },
      {
        name: "Information architecture",
        Icon: Network,
        note: "Structure",
        color: "bg-sticky-violet",
      },
    ],
  },
  {
    group: "AI tools",
    tab: "bg-sticky-green",
    items: [
      {
        name: "Claude",
        slug: "claude",
        note: "AI assistant",
        color: "bg-sticky-yellow",
      },
      {
        name: "Lovable",
        Icon: Heart,
        note: "App building",
        color: "bg-sticky-pink",
      },
      {
        name: "v0 by Vercel",
        Icon: Triangle,
        note: "AI UI generation",
        color: "bg-sticky-blue",
      },
    ],
  },
];
