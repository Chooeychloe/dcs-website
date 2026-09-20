// src/data/facultyExtension.js

export const facultyExtension = {
  "jovelyn-ocampo": [
    {
      title: "Digital Literacy and Technology Awareness Program",
      role: "Project Lead",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2026,
      description:
        "Conducted community-based activities focused on improving digital literacy and awareness of emerging technologies.",
    },
    {
      title: "Community Technology Training Program",
      role: "Technical Consultant",
      organization: "Local Community Partner",
      year: 2025,
      description:
        "Provided technical guidance and training support for community participants in the use of digital technologies.",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      title: "Introduction to Artificial Intelligence for Students",
      role: "Resource Speaker",
      organization: "Partner Secondary School",
      year: 2026,
      description:
        "Conducted an introductory training session on artificial intelligence concepts, applications, and responsible use.",
    },
    {
      title: "Programming Skills Development Workshop",
      role: "Trainer",
      organization: "Community Learning Center",
      year: 2025,
      description:
        "Facilitated hands-on programming activities designed to introduce participants to fundamental software development concepts.",
    },
  ],

  "donnalyn-montallana": [
    {
      title: "Web Development and Digital Services Training",
      role: "Trainer",
      organization: "Local Community Partner",
      year: 2026,
      description:
        "Provided hands-on training on basic web development and digital services for community participants.",
    },
    {
      title: "Database Management Skills Workshop",
      role: "Technical Trainer",
      organization: "Partner Educational Institution",
      year: 2025,
      description:
        "Conducted practical training on database concepts, data organization, and basic database management.",
    },
  ],

  "steffanie-bato": [
    {
      title: "Student Leadership and Digital Citizenship Program",
      role: "Program Coordinator",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2026,
      description:
        "Coordinated activities promoting student leadership, responsible digital citizenship, and community engagement.",
    },
    {
      title: "Youth Development and Engagement Program",
      role: "Facilitator",
      organization: "Community Youth Organization",
      year: 2025,
      description:
        "Facilitated activities designed to promote student participation, leadership, and personal development.",
    },
  ],

  "bryan-ablaza": [
    {
      title: "Web Development Skills Training",
      role: "Technical Trainer",
      organization: "Community Learning Center",
      year: 2026,
      description:
        "Conducted hands-on training introducing participants to modern web development concepts and tools.",
    },
    {
      title: "Digital Information Management Workshop",
      role: "Technical Consultant",
      organization: "Local Community Partner",
      year: 2025,
      description:
        "Provided technical assistance on organizing, managing, and maintaining digital information systems.",
    },
  ],

  "mikaela-arciaga": [
    {
      title: "Introduction to Programming Workshop",
      role: "Trainer",
      organization: "Partner Secondary School",
      year: 2026,
      description:
        "Facilitated programming activities designed to introduce students to computational thinking and basic programming concepts.",
    },
    {
      title: "Application Development Skills Program",
      role: "Technical Trainer",
      organization: "Community Learning Center",
      year: 2025,
      description:
        "Provided practical training on application development concepts and software project planning.",
    },
  ],

  "john-nerick-batuigas": [
    {
      title: "Cybersecurity Awareness and Digital Safety Program",
      role: "Resource Speaker",
      organization: "Local Community Partner",
      year: 2026,
      description:
        "Conducted awareness activities covering cybersecurity threats, safe online practices, and responsible technology use.",
    },
    {
      title: "Basic Network Security Training",
      role: "Technical Trainer",
      organization: "Partner Educational Institution",
      year: 2025,
      description:
        "Provided introductory training on networking fundamentals and basic network security practices.",
    },
  ],

  "stephen-bacolor": [
    {
      title: "Introduction to Data Science and Artificial Intelligence",
      role: "Resource Speaker",
      organization: "Partner Educational Institution",
      year: 2026,
      description:
        "Conducted an introductory session on data science, artificial intelligence, and their practical applications.",
    },
    {
      title: "Data Analytics Skills Workshop",
      role: "Trainer",
      organization: "Community Learning Center",
      year: 2025,
      description:
        "Facilitated hands-on activities introducing participants to basic data analysis and visualization techniques.",
    },
  ],
};

export function getFacultyExtension(facultyId) {
  return facultyExtension[facultyId] ?? [];
}
