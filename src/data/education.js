// src/data/education.js

export const education = {
  "jovelyn-ocampo": [
    {
      degree: "Doctor in Information Technology",
      institution: "Cavite State University",
      year: null,
      status: "Units",
    },
    {
      degree: "Master of Information Technology",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      degree: "Master of Computer Science",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "donnalyn-montallana": [
    {
      degree: "Master of Information Technology",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "steffanie-bato": [
    {
      degree: "Master's Degree",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "bryan-ablaza": [
    {
      degree: "Master of Information Technology",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "mikaela-arciaga": [
    {
      degree: "Master of Computer Science",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "john-nerick-batuigas": [
    {
      degree: "Master's Degree",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],

  "stephen-bacolor": [
    {
      degree: "Master of Computer Science",
      institution: "Cavite State University",
      year: null,
      status: "Completed",
    },
  ],
};

export function getEducation(facultyId) {
  return education[facultyId] ?? [];
}
