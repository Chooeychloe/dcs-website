// src/data/affiliations.js

export const affiliations = {
  "jovelyn-ocampo": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2024 – Present",
    },
    {
      organization: "Association of Computing Educators",
      role: "Member",
      period: "2023 – Present",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2025 – Present",
    },
    {
      organization: "Association for Computing Machinery",
      role: "Professional Member",
      period: "2024 – Present",
    },
  ],

  "donnalyn-montallana": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2024 – Present",
    },
    {
      organization: "Information Technology Educators Association",
      role: "Member",
      period: "2023 – Present",
    },
  ],

  "steffanie-bato": [
    {
      organization: "Philippine Association of Student Affairs Professionals",
      role: "Member",
      period: "2024 – Present",
    },
    {
      organization: "Higher Education Student Services Network",
      role: "Member",
      period: "2023 – Present",
    },
  ],

  "bryan-ablaza": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2025 – Present",
    },
    {
      organization: "Association of Computing Educators",
      role: "Member",
      period: "2024 – Present",
    },
  ],

  "mikaela-arciaga": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2025 – Present",
    },
    {
      organization: "Software Engineering Educators Network",
      role: "Member",
      period: "2024 – Present",
    },
  ],

  "john-nerick-batuigas": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2024 – Present",
    },
    {
      organization: "Cybersecurity Professionals Association",
      role: "Member",
      period: "2023 – Present",
    },
  ],

  "stephen-bacolor": [
    {
      organization: "Philippine Computing Society",
      role: "Member",
      period: "2025 – Present",
    },
    {
      organization: "Data Science and Artificial Intelligence Association",
      role: "Member",
      period: "2024 – Present",
    },
  ],
};

export function getAffiliations(facultyId) {
  return affiliations[facultyId] ?? [];
}
