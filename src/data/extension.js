import {
  BookOpenCheck,
  Code2,
  GraduationCap,
  Handshake,
  Lightbulb,
  MonitorCog,
} from "lucide-react";

export const extensionAreas = [
  {
    title: "Digital Literacy",
    description:
      "Initiatives that help communities develop practical digital skills and confidence in using technology.",
    icon: GraduationCap,
  },
  {
    title: "Technology Training",
    description:
      "Training programs and workshops focused on practical computing tools, software, and emerging technologies.",
    icon: BookOpenCheck,
  },
  {
    title: "Software & Technical Services",
    description:
      "Technology-oriented services that support organizations and communities through practical computing solutions.",
    icon: MonitorCog,
  },
  {
    title: "Programming & Development",
    description:
      "Activities that introduce software development concepts and encourage the creation of useful digital solutions.",
    icon: Code2,
  },
  {
    title: "Innovation & Entrepreneurship",
    description:
      "Programs that encourage participants to transform ideas and technology into practical innovations.",
    icon: Lightbulb,
  },
  {
    title: "Community Partnerships",
    description:
      "Collaborative activities with schools, organizations, institutions, and community stakeholders.",
    icon: Handshake,
  },
];

export const extensionPrograms = [
  {
    id: 1,
    title: "Community Digital Literacy Program",
    category: "Training",
    description:
      "Placeholder for a department-led activity designed to strengthen practical digital skills among community participants.",
    beneficiaries: "Community Participants",
    status: "Planned",
  },
  {
    id: 2,
    title: "Technology Skills Workshop",
    category: "Workshop",
    description:
      "Placeholder for a hands-on workshop covering selected computing technologies, tools, or applications.",
    beneficiaries: "Students / Community",
    status: "Planned",
  },
  {
    id: 3,
    title: "ICT Support & Community Engagement",
    category: "Technical Service",
    description:
      "Placeholder for a technical assistance or community engagement activity involving computing-related services.",
    beneficiaries: "Partner Organizations",
    status: "Planned",
  },
];
