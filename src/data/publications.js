// src/data/publications.js

export const publications = {
  "jovelyn-ocampo": [
    {
      title:
        "Love na Love niya si Dhan",
      authors: [
        "Jovelyn D. Ocampo",
      
      ],
      journal: "Philippine Journal of Loving you Colleague",
      year: 2025,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/pjcet.2025.001",
      url: "#",
    },
    {
      title:
        "Miss niya si Dhan Everytime",
      authors: [
        "Jovelyn D. Ocampo",
      
      ],
      journal: "International Journal of I ♡ U",
      year: 2024,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/ijist.2024.014",
      url: "#",
    },
  ],

  "ely-rose-panganiban-briones": [
    {
      title:
        "Exploring Artificial Intelligence Applications for Student Learning Support",
      authors: [
        "Ely Rose Panganiban-Briones",
        "Kevin A. Mendoza",
        "Angela T. Reyes",
      ],
      journal: "Journal of Emerging Computing Technologies",
      year: 2026,
      type: "Research Article",
      doi: "https://doi.org/10.0000/ject.2026.008",
      url: "#",
    },
    {
      title:
        "Software Engineering Practices in Undergraduate Application Development",
      authors: [
        "Ely Rose Panganiban-Briones",
        "Patrick J. Flores",
      ],
      journal: "Philippine Computing Research Journal",
      year: 2025,
      type: "Conference Paper",
      doi: "https://doi.org/10.0000/pcrj.2025.022",
      url: "#",
    },
  ],

  "donnalyn-montallana": [
    {
      title:
        "Design and Development of Web-Based Information Systems for Academic Services",
      authors: [
        "Donnalyn B. Montallana",
        "Joshua M. Villanueva",
      ],
      journal: "International Journal of Web and Information Technologies",
      year: 2026,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/ijwit.2026.011",
      url: "#",
    },
    {
      title:
        "Improving Information Retrieval through Database Optimization Techniques",
      authors: [
        "Donnalyn B. Montallana",
        "Carlo B. Navarro",
        "Rina P. Torres",
      ],
      journal: "Journal of Database and Information Management",
      year: 2025,
      type: "Research Article",
      doi: "https://doi.org/10.0000/jdim.2025.019",
      url: "#",
    },
  ],

  "steffanie-bato": [
    {
      title:
        "Student Engagement and Participation in Technology-Enhanced Higher Education",
      authors: [
        "Steffanie M. Bato",
        "Christine A. Ramos",
      ],
      journal: "Philippine Journal of Student Development",
      year: 2025,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/pjsd.2025.006",
      url: "#",
    },
    {
      title:
        "Digital Student Services: Improving Accessibility and Engagement through Technology",
      authors: [
        "Steffanie M. Bato",
        "Michael D. Reyes",
        "Anne C. Bautista",
      ],
      journal: "Journal of Higher Education Services and Development",
      year: 2024,
      type: "Research Article",
      doi: "https://doi.org/10.0000/jhesd.2024.013",
      url: "#",
    },
  ],

  "bryan-ablaza": [
    {
      title:
        "A Web-Based Information Management System for Academic Support Services",
      authors: [
        "Bryan Ablaza",
        "Mark Anthony L. Cruz",
      ],
      journal: "Philippine Journal of Information Technology",
      year: 2026,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/pjit.2026.017",
      url: "#",
    },
    {
      title:
        "Database Performance Optimization for Web-Based Applications",
      authors: [
        "Bryan Ablaza",
        "John P. Mendoza",
        "Sarah M. Flores",
      ],
      journal: "International Journal of Computing and Applications",
      year: 2025,
      type: "Conference Paper",
      doi: "https://doi.org/10.0000/ijca.2025.031",
      url: "#",
    },
  ],

  "mikaela-arciaga": [
    {
      title:
        "A Project-Based Approach to Improving Programming Skills among Computing Students",
      authors: [
        "Mikaela Arciaga",
        "Lorenzo P. Santos",
      ],
      journal: "Journal of Computing Education and Practice",
      year: 2026,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/jcep.2026.004",
      url: "#",
    },
    {
      title:
        "Applying Software Engineering Principles in Undergraduate Application Development",
      authors: [
        "Mikaela Arciaga",
        "Rafael D. Garcia",
        "Nicole T. Reyes",
      ],
      journal: "Philippine Software Engineering Review",
      year: 2025,
      type: "Research Article",
      doi: "https://doi.org/10.0000/pser.2025.015",
      url: "#",
    },
  ],

  "john-nerick-batuigas": [
    {
      title:
        "Cybersecurity Awareness among Undergraduate Computing Students",
      authors: [
        "John Nerick Batuigas",
        "Christian M. Navarro",
      ],
      journal: "Journal of Cybersecurity and Information Assurance",
      year: 2026,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/jcia.2026.009",
      url: "#",
    },
    {
      title:
        "Assessing Network Security Practices in Academic Computer Laboratories",
      authors: [
        "John Nerick Batuigas",
        "Daniel P. Flores",
        "Mark R. Santos",
      ],
      journal: "International Journal of Network and Security Studies",
      year: 2025,
      type: "Research Article",
      doi: "https://doi.org/10.0000/ijnss.2025.027",
      url: "#",
    },
  ],

  "stephen-bacolor": [
    {
      title:
        "Machine Learning Applications for Data-Driven Academic Decision Making",
      authors: [
        "Stephen Bacolor",
        "Adrian M. Reyes",
      ],
      journal: "Journal of Artificial Intelligence and Data Science",
      year: 2026,
      type: "Journal Article",
      doi: "https://doi.org/10.0000/jaids.2026.012",
      url: "#",
    },
    {
      title:
        "Exploring Data Analytics Techniques for Student Academic Performance",
      authors: [
        "Stephen Bacolor",
        "Maria T. Garcia",
        "Kevin P. Santos",
      ],
      journal: "Philippine Journal of Data Science",
      year: 2025,
      type: "Conference Paper",
      doi: "https://doi.org/10.0000/pjds.2025.018",
      url: "#",
    },
  ],
};

export function getPublications(facultyId) {
  return publications[facultyId] ?? [];
}