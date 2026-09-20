// src/data/awards.js

export const awards = {
  "jovelyn-ocampo": [
    {
      title: "Outstanding Academic Leadership Award",
      organization: "Cavite State University",
      year: 2025,
      description:
        "Recognized for leadership and contributions to academic program development.",
    },
    {
      title: "Excellence in Teaching Award",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2024,
      description:
        "Recognized for excellence in teaching and student development.",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      title: "Excellence in Computer Science Education",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2025,
      description:
        "Recognized for contributions to Computer Science instruction and student development.",
    },
    {
      title: "Innovation in Teaching Award",
      organization: "Academic Technology Association",
      year: 2024,
      description:
        "Recognized for integrating innovative technologies into classroom instruction.",
    },
  ],

  "donnalyn-montallana": [
    {
      title: "Outstanding Program Coordination Award",
      organization: "Cavite State University",
      year: 2025,
      description:
        "Recognized for contributions to the development and coordination of the Information Technology program.",
    },
    {
      title: "Excellence in Technology Education",
      organization: "Philippine Computing Educators Association",
      year: 2024,
      description:
        "Recognized for contributions to technology education and student learning.",
    },
  ],

  "steffanie-bato": [
    {
      title: "Outstanding Student Services Award",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2025,
      description:
        "Recognized for contributions to student development and support services.",
    },
    {
      title: "Student Engagement Excellence Award",
      organization: "Higher Education Student Services Council",
      year: 2024,
      description:
        "Recognized for initiatives that promoted student engagement and participation.",
    },
  ],

  "bryan-ablaza": [
    {
      title: "Excellence in Technical Instruction",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2025,
      description:
        "Recognized for effective instruction in web development and database-related courses.",
    },
    {
      title: "Innovation in Computing Education",
      organization: "Philippine Computing Educators Association",
      year: 2024,
      description:
        "Recognized for the use of practical technology projects in computing education.",
    },
  ],

  "mikaela-arciaga": [
    {
      title: "Excellence in Programming Education",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2025,
      description:
        "Recognized for contributions to programming instruction and student development.",
    },
    {
      title: "Outstanding Technology Educator",
      organization: "Computing Education Development Council",
      year: 2024,
      description:
        "Recognized for contributions to software development education.",
    },
  ],

  "john-nerick-batuigas": [
    {
      title: "Excellence in Cybersecurity Education",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2025,
      description:
        "Recognized for contributions to networking and cybersecurity education.",
    },
    {
      title: "Outstanding Technical Instruction Award",
      organization: "Philippine Network and Security Association",
      year: 2024,
      description:
        "Recognized for practical approaches to networking and information security instruction.",
    },
  ],

  "stephen-bacolor": [
    {
      title: "Innovation in Data Science Education",
      organization: "Cavite State University – Bacoor City Campus",
      year: 2025,
      description:
        "Recognized for integrating data science and emerging technologies into computing education.",
    },
    {
      title: "Excellence in Emerging Technology Instruction",
      organization: "Philippine Computing Educators Association",
      year: 2024,
      description:
        "Recognized for contributions to artificial intelligence and emerging technology education.",
    },
  ],
};

export function getAwards(facultyId) {
  return awards[facultyId] ?? [];
}
