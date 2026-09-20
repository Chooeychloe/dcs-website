import {
  BrainCircuit,
  Database,
  FlaskConical,
  Globe2,
  LockKeyhole,
  Network,
} from "lucide-react";

export const researchAreas = [
  {
    title: "Software Engineering",
    description:
      "Software development, application architecture, testing, and engineering practices.",
    icon: FlaskConical,
  },
  {
    title: "Data & Intelligent Systems",
    description:
      "Data management, analytics, artificial intelligence, and intelligent computing systems.",
    icon: BrainCircuit,
  },
  {
    title: "Information Systems",
    description:
      "Systems that support organizational processes, services, decision-making, and digital transformation.",
    icon: Database,
  },
  {
    title: "Cybersecurity",
    description:
      "Information assurance, secure systems, privacy, risk management, and cybersecurity practices.",
    icon: LockKeyhole,
  },
  {
    title: "Networks & Distributed Systems",
    description:
      "Computer networks, distributed computing, communication systems, and connected technologies.",
    icon: Network,
  },
  {
    title: "Emerging Technologies",
    description:
      "Exploration of new and evolving technologies and their applications in education and society.",
    icon: Globe2,
  },
];

export const researchProjects = [
  {
    id: 1,
    title: "Research Project Title",
    type: "Faculty Research",
    status: "Ongoing",
    description:
      "Replace this placeholder with an actual department research project, including a short summary of its objectives and contribution.",
    link: null,
  },
  {
    id: 2,
    title: "Research or Thesis Title",
    type: "Student Research",
    status: "Completed",
    description:
      "Replace this placeholder with an approved student thesis, capstone, or research output.",
    link: null,
  },
  {
    id: 3,
    title: "Research Collaboration",
    type: "Collaborative Research",
    status: "Ongoing",
    description:
      "Use this section for collaborative work involving faculty members, students, partner institutions, or other organizations.",
    link: null,
  },
];
