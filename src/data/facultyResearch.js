// src/data/facultyResearch.js

export const facultyResearch = {
  "jovelyn-ocampo": [
    {
      title: "Educational Technology and Digital Learning",
      type: "Research Interest",
      status: "Ongoing",
      year: 2026,
      description:
        "Research initiatives exploring the use of educational technologies and digital platforms to improve teaching, learning, and student engagement.",
    },
    {
      title: "Information Technology in Higher Education",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies focusing on the application of information technology in academic processes, institutional services, and student development.",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      title: "Artificial Intelligence in Education",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Exploration of artificial intelligence applications that can support teaching, learning, assessment, and academic processes.",
    },
    {
      title: "Software Engineering and Application Development",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research involving software development methodologies, application design, and software engineering practices.",
    },
  ],

  "donnalyn-montallana": [
    {
      title: "Web-Based Information Systems",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research involving web technologies and information systems designed to support organizational and educational processes.",
    },
    {
      title: "Database Systems and Information Management",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies focused on database technologies, information management, and efficient storage and retrieval of organizational data.",
    },
  ],

  "steffanie-bato": [
    {
      title: "Student Development and Engagement",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research focused on student engagement, participation, development, and support within higher education.",
    },
    {
      title: "Student Services and Support Systems",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies exploring technology-supported approaches to student services and institutional support programs.",
    },
  ],

  "bryan-ablaza": [
    {
      title: "Web Application Development",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research and development activities involving modern web technologies and practical information systems.",
    },
    {
      title: "Database-Driven Applications",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies involving database design, integration, and development of database-driven applications.",
    },
  ],

  "mikaela-arciaga": [
    {
      title: "Software Engineering and Application Development",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research involving software engineering practices, application development, and software quality.",
    },
    {
      title: "Programming Education",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies exploring programming education, instructional approaches, and tools for improving programming skills.",
    },
  ],

  "john-nerick-batuigas": [
    {
      title: "Network Security",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research involving network protection, security practices, and approaches for improving the security of networked systems.",
    },
    {
      title: "Cybersecurity Awareness and Education",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies focused on cybersecurity awareness, information-security practices, and security education.",
    },
  ],

  "stephen-bacolor": [
    {
      title: "Artificial Intelligence Applications",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Research exploring practical applications of artificial intelligence and machine learning.",
    },
    {
      title: "Data Science and Analytics",
      type: "Research Area",
      status: "Ongoing",
      year: 2026,
      description:
        "Studies involving data analysis, data-driven decision making, and the application of data science techniques.",
    },
  ],
};

export function getFacultyResearch(facultyId) {
  return facultyResearch[facultyId] ?? [];
}