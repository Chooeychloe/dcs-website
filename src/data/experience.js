// src/data/experience.js

export const experience = {
  "jovelyn-ocampo": [
    {
      position: "Department Chair",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Leads the Department of Computer Studies and supports academic, administrative, research, and student development initiatives.",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      position: "CS Coordinator",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Coordinates academic activities and supports the development and implementation of the Computer Science program.",
    },
  ],

  "donnalyn-montallana": [
    {
      position: "BSIT Coordinator",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Coordinates academic activities and supports the development and implementation of the Information Technology program.",
    },
  ],

  "steffanie-bato": [
    {
      position: "OSAS Coordinator",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Coordinates student affairs and services and supports student development initiatives and institutional activities.",
    },
  ],

  "bryan-ablaza": [
    {
      position: "Instructor I",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Teaches Computer Studies courses and supports the development of students' technical and problem-solving skills.",
    },
  ],

  "mikaela-arciaga": [
    {
      position: "Instructor I",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Teaches programming and software development courses and supports student application development activities.",
    },
  ],

  "john-nerick-batuigas": [
    {
      position: "Instructor I",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Teaches networking and information security courses with emphasis on practical technical skills.",
    },
  ],

  "stephen-bacolor": [
    {
      position: "Instructor I",
      institution: "Cavite State University – Bacoor City Campus",
      period: "Present",
      description:
        "Teaches computing courses with emphasis on data science, artificial intelligence, and emerging technologies.",
    },
  ],
};

export function getExperience(facultyId) {
  return experience[facultyId] ?? [];
}
