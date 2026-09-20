// src/data/skills.js

export const skills = {
  "jovelyn-ocampo": [
    "Information Technology",
    "Computer Science",
    "Educational Technology",
    "Software Development",
    "Database Systems",
  ],

  "ely-rose-panganiban-briones": [
    "Software Development",
    "Artificial Intelligence",
    "Programming",
    "Software Engineering",
    "Application Development",
  ],

  "donnalyn-montallana": [
    "Web Development",
    "Database Systems",
    "Information Systems",
    "Web Technologies",
    "Database Management",
  ],

  "steffanie-bato": [
    "Student Development",
    "Student Services",
    "Program Coordination",
    "Student Engagement",
  ],

  "bryan-ablaza": [
    "Web Development",
    "Database Systems",
    "Database Management",
    "Application Development",
  ],

  "mikaela-arciaga": [
    "Programming",
    "Software Engineering",
    "Application Development",
    "Software Development",
  ],

  "john-nerick-batuigas": [
    "Computer Networking",
    "Cybersecurity",
    "Network Security",
    "Information Security",
  ],

  "stephen-bacolor": [
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Emerging Technologies",
  ],
};

export function getSkills(facultyId) {
  return skills[facultyId] ?? [];
}