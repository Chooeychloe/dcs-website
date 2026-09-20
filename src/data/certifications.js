// src/data/certifications.js

export const certifications = {
  "jovelyn-ocampo": [
    {
      title: "Professional Certificate in Educational Technology",
      issuer: "International Institute of Digital Education",
      year: 2025,
      type: "Professional Certification",
    },
    {
      title: "Higher Education Leadership and Management",
      issuer: "Philippine Academic Development Institute",
      year: 2024,
      type: "Training",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "Global Technology Learning Institute",
      year: 2026,
      type: "Professional Certification",
    },
    {
      title: "Modern Software Engineering Practices",
      issuer: "International Software Development Academy",
      year: 2025,
      type: "Training",
    },
  ],

  "donnalyn-montallana": [
    {
      title: "Full-Stack Web Development",
      issuer: "Web Technology Certification Institute",
      year: 2026,
      type: "Professional Certification",
    },
    {
      title: "Database Administration and Optimization",
      issuer: "Digital Technology Training Center",
      year: 2025,
      type: "Training",
    },
  ],

  "steffanie-bato": [
    {
      title: "Student Affairs and Services Management",
      issuer: "Higher Education Development Institute",
      year: 2025,
      type: "Professional Certification",
    },
    {
      title: "Student Development and Engagement Strategies",
      issuer: "Philippine Student Services Training Center",
      year: 2024,
      type: "Training",
    },
  ],

  "bryan-ablaza": [
    {
      title: "Full-Stack Web Application Development",
      issuer: "Modern Web Technologies Institute",
      year: 2026,
      type: "Professional Certification",
    },
    {
      title: "Advanced Database Systems and Optimization",
      issuer: "International Database Training Academy",
      year: 2025,
      type: "Training",
    },
  ],

  "mikaela-arciaga": [
    {
      title: "Software Development and Engineering Practices",
      issuer: "Software Engineering Certification Institute",
      year: 2026,
      type: "Professional Certification",
    },
    {
      title: "Modern Application Development",
      issuer: "Technology Skills Development Center",
      year: 2025,
      type: "Training",
    },
  ],

  "john-nerick-batuigas": [
    {
      title: "Cybersecurity Fundamentals",
      issuer: "International Cybersecurity Academy",
      year: 2026,
      type: "Professional Certification",
    },
    {
      title: "Network Security and Administration",
      issuer: "Network Technology Training Institute",
      year: 2025,
      type: "Training",
    },
  ],

  "stephen-bacolor": [
    {
      title: "Applied Data Science",
      issuer: "Data Science Professional Institute",
      year: 2026,
      type: "Professional Certification",
    },
    {
      title: "Machine Learning and Artificial Intelligence",
      issuer: "Artificial Intelligence Learning Academy",
      year: 2025,
      type: "Training",
    },
  ],
};

export function getCertifications(facultyId) {
  return certifications[facultyId] ?? [];
}
