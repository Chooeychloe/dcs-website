import {
  Code2,
  Database,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

export const programs = [
  {
    id: "bscs",
    code: "BSCS",
    title: "Bachelor of Science in Computer Science",
    shortDescription:
      "A program focused on computing concepts, algorithms, software development, and the foundations of modern computer science.",
    icon: Code2,

    highlights: [
      "Programming",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Artificial Intelligence",
    ],

    curriculum: [
      // =========================================================
      // GENERAL EDUCATION
      // =========================================================
      {
        category: "General Education",
        code: "GNED 01",
        title: "Understanding the Self",
        description:
          "Nature of identity; factors and forces that affect the development and maintenance of personal identity.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 02",
        title: "Ethics",
        description:
          "Principles of ethical behavior in modern society at the level of the person, society, and interaction with the environment and other shared resources.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 03",
        title: "Mathematics in the Modern World",
        description:
          "Nature of mathematics, appreciation of its practical, intellectual and aesthetic dimensions, and application of mathematical tools in daily life.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 04",
        title: "Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas",
        description:
          "Mga piling primaryang sanggunian ukol sa iba't-ibang yugto ng kasaysayan ng Pilipinas, pagsusuri at interpretasyon.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 05",
        title: "Purposive Communication",
        description:
          "Writing, speaking and presenting to different audiences and for various purposes.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 06",
        title: "Science, Technology and Society",
        description:
          "Interactions between science and technology and social, cultural, political and economic contexts which shape and are shaped by them; specific examples throughout human history of scientific and technological developments.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 07",
        title: "The Contemporary World",
        description:
          "Globalization and its impact on individuals, communities and nations, challenges and responses.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 08",
        title: "Understanding the Self",
        description:
          "Nature of identity; factors and forces that affect the development and maintenance of personal identity.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 09",
        title: "Life and Works of Rizal",
        description:
          "Life, works and writings of Rizal with emphasis on his principles, ideals and teachings toward the development and progress of his country.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "GNED 04",
      },
      {
        category: "General Education",
        code: "GNED 10",
        title: "Gender and Society",
        description:
          "Gender as a social construction, its role in and impact on different facets of societal life.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 11",
        title: "Kontekstwalisadong Komunikasyon sa Filipino",
        description:
          "Isang praktikal na kursong nagpapalawak at nagpapalalim sa kontekstwalisadong komunikasyon sa wikang Filipino ng mga mamamayang Pilipino sa kani-kanilang mga komunidad sa partikular, at sa buong lipunang Pilipino sa pangkalahatan. Nakatuon ang kursong ito sa makrokasanayang pakikinig at pagsasalita, gayundin sa kasanayan sa paggamit ng iba't ibang tradisyonal at modernong midya na makabuluhan sa kontekstong Pilipino sa iba't ibang antas at larangan.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "GNED 12",
        title: "Dalumat ng/sa Filipino",
        description:
          "Isang maagwat na kursong nagpapalawak at nagpapalalim sa kasanayan sa malalim at mapanuring pagbasa, pagsulat, at pananaliksik sa wikang Filipino sa iba't-ibang larangan, sa konteksto ng kontemporaryong sitwasyon at mga pangangailangan ng bansa at mga mamamayang Pilipino.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "GNED 11",
      },
      {
        category: "General Education",
        code: "GNED 14",
        title: "Panitikang Panlipunan",
        description:
          "Isang kurso sa pag-aaral at paglikha ng panitikang Filipino na nakatuon sa kabuluhang panlipunan ng mga tekstong literari sa iba't ibang bahagi ng kasaysayan ng bansang Pilipinas. Sinasaklaw nito ang mga isyung panlipunan na tinalakay ng mga akdang Filipino tulad ng kahirapan, malawak na agwat ng mayayaman at mahirap, reporma sa lupa, globalisasyon, pagsasamantala sa mga manggagawa, karapatang pantao, isyung pangkasarian, sitwasyon ng mga pangkat minorya at/o marhinalisado, at iba pa.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "General Education",
        code: "CvSU 101",
        title: "Institutional Organization",
        description:
          "Cavite State University, its rules and regulations.",
        units: 0,
        lecture: "1 hour",
        laboratory: "0",
        prerequisite: "None",
      },

      // =========================================================
      // PHYSICAL EDUCATION
      // =========================================================
      {
        category: "Physical Education",
        code: "FITT 1",
        title: "Movement Enhancement",
        description:
          "This course provides trainings in different movement patterns and core engagement in conjunction with principles of healthy and physically active life. Students will be taught to adjust and transfer the movement competency in different contexts (i.e. use of training equipment).",
        units: 2,
        lecture: "2 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "Physical Education",
        code: "FITT 2",
        title: "Fitness Exercises",
        description:
          "This course provides experiences in core stability, strength and mobility training. It includes goal setting exercise progression and regression and periodic assessment for the development of various fitness components.",
        units: 2,
        lecture: "2 hours",
        laboratory: "0",
        prerequisite: "FITT 1",
      },
      {
        category: "Physical Education",
        code: "FITT 3",
        title: "Physical Activities Toward Health and Fitness 1",
        description:
          "This course will provide activities for the purpose of optimizing health and fitness. Students will choose from a menu of course offering in dance, sports, and outdoor adventure activities.",
        units: 2,
        lecture: "2 hours",
        laboratory: "0",
        prerequisite: "FITT 1",
      },
      {
        category: "Physical Education",
        code: "FITT 4",
        title: "Physical Activities Toward Health and Fitness 2",
        description:
          "This course will provide activities for the purpose of optimizing health and fitness. Students will choose from a menu of course offering in dance, sports, and outdoor adventure activities.",
        units: 2,
        lecture: "2 hours",
        laboratory: "0",
        prerequisite: "FITT 1",
      },

      // =========================================================
      // NSTP
      // =========================================================
      {
        category: "NSTP",
        code: "NSTP 1",
        title: "National Service Training Program 1 (Civil Welfare Training Service Component)",
        description:
          "The National Service Training Program I – Civil Welfare Training Services (CWTS 1) is a course designed to help students understand, appreciate and eventually live by the concepts of the National Service Reserve Corps with the view of empowering them into becoming a potent resource for community development. In general, it is aimed to equip students with fundamental knowledge in the various dimensions of development and understand dynamics in the community.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "NSTP",
        code: "NSTP 2",
        title: "National Service Training Program 2 (Civil Welfare Training Service Component)",
        description:
          "The National Service Training Program 2 (NSTP-CWTS 2) is a sequel to NSTP-CWTS 1. It is designed to equip students with the fundamentals of project identification, planning and implementation in pursuit of contributing to the upliftment of the general welfare and quality of life of the people in the community.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "NSTP 1",
      },

      // =========================================================
      // ADDITIONAL MATH REQUIREMENT
      // =========================================================
      {
        category: "Additional Math Requirement",
        code: "MATH 1",
        title: "Analytic Geometry",
        description:
          "Analytic Geometry is a three-unit course which consists of the study of graphs and their equations, straight line, circle, parabola, ellipse, hyperbola, rotation of axis and higher plane curves fitting.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "GNED 03",
      },
      {
        category: "Additional Math Requirement",
        code: "MATH 2",
        title: "Calculus",
        description:
          "This course is designed to develop the topics of differential and integral calculus. Emphasis is placed on limits, continuity, derivatives and integrals of algebraic and transcendental functions of one variable.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "MATH 1",
      },
      {
        category: "Additional Math Requirement",
        code: "MATH 3",
        title: "Linear Algebra",
        description:
          "This is a course in the study of linear, or vector, spaces and the structure of linear mappings between such spaces. Topics in this course include vector spaces, matrices, and linear transformations, solutions of systems of linear equations, eigenvalues, eigenvectors, and the diagonalization of matrices, along with applications to differential equations.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "MATH 2",
      },
      {
        category: "Additional Math Requirement",
        code: "MATH 4",
        title: "Experimental Statistics",
        description:
          "This course will provide the students basic knowledge of probability and statistics. In probability, the concepts of sample space, probability, conditional probability, discrete and continuous random variables and distributions, expectation, moment-generating function, statistical inference, estimation methods, hypothesis testing, linear regression and analysis of variance will be covered.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "MATH 3",
      },

      // =========================================================
      // FUNDAMENTAL COURSES
      // =========================================================
      {
        category: "Fundamental Courses",
        code: "DCIT 21",
        title: "Introduction to Computing",
        description:
          "This course provides an overview of the Computing Industry and Computing profession, including Research and Applications in different fields such as Biology, Sociology, Environment and Gaming; an Understanding of ACM Requirements; an Appreciation of the history of computing; and Knowledge of the Key Components of Computer Systems (Organizations and Architecture), Malware, Computer Security, Internet and Internet protocols, HTML4/5 and CSS.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "None",
      },
      {
        category: "Fundamental Courses",
        code: "DCIT 22",
        title: "Programming 1",
        description:
          "The course covers the use of general purpose programming language to solve problems. The emphasis is to train students to design, implement, test, and debug programs intended to solve computing problems using fundamental programming constructs.",
        units: 3,
        lecture: "1 hour",
        laboratory: "6 hours",
        prerequisite: "None",
      },
      {
        category: "Fundamental Courses",
        code: "DCIT 23",
        title: "Programming 2",
        description:
          "This course is a continuation of Programming I. The emphasis is to train students using basic data structures and standard libraries.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 22",
      },
      {
        category: "Fundamental Courses",
        code: "DCIT 24",
        title: "Information Management",
        description:
          "This course covers information management, database design, data modeling, SQL, and implementation using relational database system.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 23",
      },
      {
        category: "Fundamental Courses",
        code: "DCIT 25",
        title: "Data Structures and Algorithms",
        description:
          "The course covers the standard data representation and algorithms to solve computing problems efficiently with respect to space requirements and time complexity of algorithm. This covers stacks, queues, trees, graphs, maps, and sets. Thorough discussion of sorting and searching algorithms and hashing is covered.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 23",
      },
      {
        category: "Fundamental Courses",
        code: "DCIT 26",
        title: "Applications Development and Emerging Technologies",
        description:
          "Development of applications using web, mobile, and emerging technologies with emphasis on requirements management, interface design, usability, testing, deployment, including ethical and legal considerations.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "ITEC 50",
      },

      // =========================================================
      // PROFESSIONAL COURSES
      // =========================================================
      {
        category: "Professional Courses",
        code: "COSC 50",
        title: "Discrete Structures 1",
        description:
          "This course introduces the student to the mathematical tools of logic and induction, and to the basic definitions and theorems concerning relations, functions, and sets. Particular emphasis is placed on inductive definitions and proofs, with application to problems in computer science.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "Professional Courses",
        code: "COSC 55",
        title: "Discrete Structures 2",
        description:
          "This course is a continuation of Discrete Structures 1. It provides the background in combinatorics and probability theory required in design and analysis of algorithms, in system analysis, and in other areas of computer science.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "COSC 50",
      },
      {
        category: "Professional Courses",
        code: "COSC 60",
        title: "Digital Logic Design",
        description:
          "This course provides an overview of the principles underlying number systems, logic gates, Fixed-Point Representation, Boolean Function, Boolean Algebra, combinational and sequential logic circuits, flip-flops, registers and PLAs.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "COSC 50, DCIT 23",
      },
      {
        category: "Professional Courses",
        code: "COSC 65",
        title: "Architecture and Organization",
        description:
          "This course provides an overview of the architecture and organization of a computer, how it is built. It includes a discussion of the CPU, memory, I/O organization and peripherals.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "COSC 60",
      },
      {
        category: "Professional Courses",
        code: "COSC 70",
        title: "Software Engineering 1",
        description:
          "This course gives students an introduction to software development. It will also give students skills concerning the solution of a small software development problem, spanning from the problem statement to the implementation and use of the concrete software product.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "DCIT 50, DCIT 24",
      },
      {
        category: "Professional Courses",
        code: "COSC 75",
        title: "Software Engineering 2",
        description:
          "The course gives practical experience in principles, languages and tools used to construct large complex software systems, and contributes to developing a professional attitude towards software development.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "COSC 70",
      },
      {
        category: "Professional Courses",
        code: "COSC 80",
        title: "Operating Systems",
        description:
          "This course provides an introduction to the concepts, theories and components that serve as the bases for the design of classical and modern operating systems. Topics include process and memory management, process synchronization and deadlocks.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 25",
      },
      {
        category: "Professional Courses",
        code: "COSC 85",
        title: "Networks and Communications",
        description:
          "The course describes data communications and network models, topologies, protocol standards and architectures. Necessary hardware description and components used to establish communication between multiple networks and the analysis of the effect of various network topologies, application and devices on network performance. Analysis of routing algorithm protocols, process routing tables and router configuration for proper orientation of an efficient network is also discussed.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "ITEC 50",
      },
      {
        category: "Professional Courses",
        code: "COSC 90",
        title: "Design and Analysis of Algorithm",
        description:
          "A study on the design and analysis of algorithms, which introduces students to the techniques in basic algorithmic analysis, algorithmic strategies, sorting and searching, graph algorithms and geometric algorithms.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "DCIT 25",
      },
      {
        category: "Professional Courses",
        code: "COSC 95",
        title: "Programming Languages",
        description:
          "This course provides students the fundamental features and concepts to different programming languages. Topics include overview of programming languages, introduction to language translation, type systems, data and execution control, declaration and modularity, and syntax and semantics.",
        units: 3,
        lecture: "3 hours",
        laboratory: "None",
        prerequisite: "DCIT 25",
      },
      {
        category: "Professional Courses",
        code: "COSC 100",
        title: "Automata Theory and Formal Languages",
        description:
          "This course introduces the formal models of computing and their relation to formal languages.",
        units: 3,
        lecture: "3 hours",
        laboratory: "None",
        prerequisite: "COSC 90",
      },
      {
        category: "Professional Courses",
        code: "COSC 105",
        title: "Intelligent Systems",
        description:
          "This course introduces students to the field of Artificial Intelligence (AI) with emphasis on its use to solve real world problems for which solutions are difficult to express using the traditional algorithmic approach. It explores the essential theory behind methodologies for developing systems that demonstrate intelligent behavior including dealing with uncertainty, learning from experience and following problem solving strategies found in nature.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "MATH 4, COSC 55, DCIT 50",
      },
      {
        category: "Professional Courses",
        code: "COSC 110",
        title: "Numerical and Symbolic Computation",
        description:
          "Computational problem solving; sources of errors in computation; iterative approximation methods and symbolic algebra; mathematical software libraries and symbolic manipulation packages.",
        units: 3,
        lecture: "3 hours",
        laboratory: "None",
        prerequisite: "COSC 60",
      },
      {
        category: "Professional Courses",
        code: "COSC 199",
        title: "Practicum (240 HRS.)",
        description:
          "The course analyzes, designs, tests, maintains, and/or documents a software system as applied to a real-world problem as part of a team in an actual company environment.",
        units: 3,
        lecture: "—",
        laboratory: "—",
        prerequisite: "Incoming 4th yr.",
      },
      {
        category: "Professional Courses",
        code: "COSC 200A",
        title: "Undergraduate Thesis I",
        description:
          "The course lets the students formulate the project objectives, scope and limitations and evaluation metrics, collection and comparison of literature related to the project and the proposal of an ethical and feasible computing solution to the identified problems in the undergraduate thesis.",
        units: 3,
        lecture: "—",
        laboratory: "—",
        prerequisite: "4th yr. standing",
      },
      {
        category: "Professional Courses",
        code: "COSC 200B",
        title: "Undergraduate Thesis II",
        description:
          "The course lets the students implement the proposed computing solution, evaluate and interpret the performance results based on the identified evaluation metrics and recommend possible improvements in the computing solution due to implementation issues.",
        units: 3,
        lecture: "—",
        laboratory: "—",
        prerequisite: "COSC 200A",
      },
      {
        category: "Professional Courses",
        code: "DCIT 50",
        title: "Object-Oriented Programming",
        description:
          "This course provides the students to the fundamental understanding of OOP using Java. It introduces the different concepts that are commonly associated with OOP.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 23",
      },
      {
        category: "Professional Courses",
        code: "DCIT 55",
        title: "Advanced Database Management System",
        description:
          "The course examines the different techniques of warehousing and mining data that will support the organizational decisions. This also proposes possibilities on how to improve a specific algorithm as may be applied to data warehousing and mining.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 24",
      },
      {
        category: "Professional Courses",
        code: "DCIT 60",
        title: "Methods of Research",
        description:
          "Research methodologies, importance, processes. Thesis writing guidelines.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "3rd yr standing",
      },
      {
        category: "Professional Courses",
        code: "DCIT 65",
        title: "Social Issues and Professional Issues",
        description:
          "The course argues about the pros and cons of the design and implementation of computing solutions in various organizations.",
        units: 3,
        lecture: "3 hours",
        laboratory: "0",
        prerequisite: "None",
      },
      {
        category: "Professional Courses",
        code: "INSY 50",
        title: "Fundamentals of Information Systems",
        description:
          "This course introduces the fundamentals of computer systems and the role of information processing in today's business environment. An overview is presented of information systems, systems development, operating systems and programming, database management, networking and telecommunications, and the Internet.",
        units: 3,
        lecture: "3 hours",
        laboratory: "None",
        prerequisite: "DCIT 21",
      },
      {
        category: "Professional Courses",
        code: "ITEC 50",
        title: "Web Systems and Technologies",
        description:
          "Web technologies, principles of web design, HTML protocol, format of web page, support tools for web creation, static and dynamic pages using web development applications, mobile interfaces and website administration.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 21",
      },
      {
        category: "Professional Courses",
        code: "ITEC 80",
        title: "Human Computer Interaction",
        description:
          "This course gives an overview of next-generation user interfaces and underlying methodologies. Main topics include a review of HCI concepts and history, input devices and interaction techniques, information appliances, user interface design paradigms, 3D user interfaces, adaptive interfaces, user modeling, speech recognition and conversational interfaces, wearable computers, multimodal interfaces, and perceptual interfaces.",
        units: 1,
        lecture: "0",
        laboratory: "3 hours",
        prerequisite: "ITEC 85",
      },
      {
        category: "Professional Courses",
        code: "ITEC 85",
        title: "Information Assurance and Security",
        description:
          "This course provides the foundations of information assurance and security from a business prospective. Topics covered include human factors, compliance with regulations, personnel security, risk assessment and ethical considerations.",
        units: 2,
        lecture: "3 hours",
        laboratory: "None",
        prerequisite: "DCIT 24",
      },

      // =========================================================
      // PROFESSIONAL ELECTIVES
      // =========================================================
      {
        category: "Professional Electives",
        code: "COSC 101",
        title: "Computer Graphics and Visual Computing",
        description:
          "This course provides a basic introduction to the theory and practice of 3D computer graphics, animation, and game design and implementation. The focus is on fundamental topics in computer graphics, 3D animation and simulation, multimedia, and etc.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "DCIT 23",
      },
      {
        category: "Professional Electives",
        code: "COSC 106",
        title: "Introduction to Game Development",
        description:
          "Introduction to electronic game development and game development careers. Includes examination of history and philosophy of games, the game production process, employee factors for success in the field, and current issues and practices in the game development industry.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "MATH 3, COSC 101",
      },
      {
        category: "Professional Electives",
        code: "COSC 111",
        title: "Internet of Things",
        description:
          "The course aims to help students to understand the IoT and its applications, apply the web of things and cloud of things, do IoT hardware and IoT sensors interfacing, and develop IoT applications of real world.",
        units: 3,
        lecture: "2 hours",
        laboratory: "3 hours",
        prerequisite: "COSC 60",
      },
    ],
  },

  // =====================================================================
  // BSIT
  // =====================================================================
  {
    id: "bsit",
    code: "BSIT",
    title: "Bachelor of Science in Information Technology",
    shortDescription:
      "A program focused on applying computing technologies to develop, manage, and support information systems and digital solutions.",
    icon: Layers3,

    highlights: [
      "Application Development",
      "Database Systems",
      "Networking",
      "Information Security",
    ],

    curriculum: [
      // =========================================================
      // GENERAL EDUCATION — LANGUAGES AND HUMANITIES
      // =========================================================
      {
        category: "General Education",
        section: "Languages and Humanities",
        code: "GNED 01",
        title: "Art Appreciation",
        description:
          "Art appreciation is a three-unit course that develops students' ability to appreciate, analyze, and critique works of arts. Through interdisciplinary and multimodal approaches, this course equips students with broad knowledge of the practical, historical, philosophical, and social relevance of the arts.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Languages and Humanities",
        code: "GNED 02",
        title: "Ethics",
        description:
          "Ethics deals with principles of ethical behavior in modern society at the level of the person, society and in interaction with the environment and other shared resources. The course also teaches students to make moral decisions by using dominant moral frameworks and by applying a seven-step moral reasoning model to analyze and solve moral dilemmas.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "HUMN",
      },
      {
        category: "General Education",
        section: "Languages and Humanities",
        code: "GNED 05",
        title: "Purposive Communication",
        description:
          "Purposive Communication is about writing, speaking, and presenting to different audiences and for various purposes. It develops students' communicative competence and enhances cultural and intercultural awareness through multimodal tasks.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Languages and Humanities",
        code: "GNED 07",
        title: "The Contemporary World",
        description:
          "This course introduces students to the contemporary world by examining the multifaceted phenomenon of globalization and the economic, social, political, technological, and other transformations that have created an increasing awareness of the interconnectedness of peoples and places around the world.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Languages and Humanities",
        code: "GNED 11",
        title: "Kontekstwalisadong Komunikasyon sa Filipino",
        description:
          "Ang KOMFIL ay isang praktikal na kursong nagpapalawak at nagpapalalim sa kontekstwalisadong komunikasyon sa wikang Filipino ng mga mamamayang Pilipino sa kani-kanilang mga komunidad sa partikular, at sa buong lipunang Pilipino sa pangkalahatan.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Languages and Humanities",
        code: "GNED 14",
        title: "Panitikang Panlipunan",
        description:
          "Ang SOSLIT ay isang kurso sa pag-aaral at paglikha ng panitikang Filipino na nakatuon sa kabuluhang panlipunan ng mga tekstong literari sa iba't ibang bahagi ng kasaysayan ng bansang Pilipinas.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "GNED 10",
      },

      // =========================================================
      // GENERAL EDUCATION — MATHEMATICS, NATURAL SCIENCES
      // =========================================================
      {
        category: "General Education",
        section: "Mathematics, Natural Sciences and Technology",
        code: "GNED 03",
        title: "Mathematics in the Modern World",
        description:
          "This course deals with nature of mathematics, appreciation of its practical, intellectual, and aesthetic dimensions, and application of mathematical tools in daily life. It explores mathematics as an exploration of patterns and an application of inductive and deductive reasoning.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hours/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Mathematics, Natural Sciences and Technology",
        code: "GNED 06",
        title: "Science, Technology, and Society",
        description:
          "The course deals with interactions between science and technology and social, cultural, political and economic contexts that shape and are shaped by them. This course includes mandatory topics on climate change and environmental awareness.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },

      // =========================================================
      // GENERAL EDUCATION — SOCIAL SCIENCES & COMMUNICATIONS
      // =========================================================
      {
        category: "General Education",
        section: "Social Sciences & Communications",
        code: "GNED 04",
        title: "Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas",
        description:
          "Ang Kasaysayan ng Pilipinas sa pananaw ng ilang piling primaryang batis mula sa iba't ibang panahon, pagsusuri, at interpretasyon. Binibigyan ng oportunidad ang mga mag-aaral na masuri ang karanasan ng may-akda at mga pangunahing argumento, mapaghambing ang iba't ibang pananaw, matukoy kung may pagkiling, at masuri ang ebidensiya.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Social Sciences & Communications",
        code: "GNED 08",
        title: "Understanding the Self",
        description:
          "The course deals with the nature, as well as the factors and forces that affect the development and maintenance of personal identity. It explores the self from various disciplinal perspectives and identifies areas of concern including learning, goal setting, and managing stress.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "General Education",
        section: "Social Sciences & Communications",
        code: "GNED 09",
        title: "Buhay at Mga Akda Ni Rizal",
        description:
          "Sang-ayon sa ipinag-uutos ng Batas Republika 1425, sakop ng kursong ito ang buhay at mga akda ng pambansang bayani ng bansa, si Jose Rizal. Ilan sa mga paksang sakop ay ang talambuhay ni Rizal at ng kaniyang mga isinulat, lalo na sa mga nobela niyang Noli Me Tangere at El Filibusterismo.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "Mga Babasahin Hinggil sa Kasaysayan",
      },
      {
        category: "General Education",
        section: "Social Sciences & Communications",
        code: "GNED 10",
        title: "Gender and Society",
        description:
          "Gender as a social construction, its role in and impact on different facets of societal life.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },

      // =========================================================
      // COMMON COURSES
      // =========================================================
      {
        category: "Common Courses",
        code: "DCIT 21",
        title: "Introduction to Computing",
        description:
          "This course provides an overview of the Computing Industry and Computing profession, including Research and Applications in different fields; an Appreciation of Computing in different fields such as Biology, Sociology, Environment and Gaming; an Understanding of ACM Requirement; an Appreciation of the history of computing; and Knowledge of the Key Components of Computer Systems, Organization and Architecture, Malware, Computer Security, Internet and Internet protocols, HTML4/5 and CSS.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "None",
      },
      {
        category: "Common Courses",
        code: "DCIT 22",
        title: "Computer Programming 1 (Fundamentals of Programming)",
        description:
          "The course covers the use of general purpose programming language to solve problems. The emphasis is to train students to design, implement, test, and debug programs intended to solve computing problems using fundamental programming constructs.",
        units: 3,
        lecture: "1 hour/week",
        laboratory: "6 hours/week",
        prerequisite: "None",
      },
      {
        category: "Common Courses",
        code: "DCIT 23",
        title: "Computer Programming 2 (Intermediate Programming)",
        description:
          "This course is a continuation of CC101 - Computer Programming 1. The emphasis is to train students to design, implement, test and debug programs intended to solve computing problems using basic data structures and standard libraries.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 22",
      },
      {
        category: "Common Courses",
        code: "DCIT 24",
        title: "Data Structure and Algorithm",
        description:
          "The course covers the standard data representation and algorithms to solve computing problems efficiently with respect to space requirements and time complexity of algorithm. This covers stacks, queues, trees, graphs, maps and sets, as well as sorting, searching and hashing.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 50",
      },
      {
        category: "Common Courses",
        code: "DCIT 25",
        title: "Information Management",
        description:
          "This course covers information management, database design, data modeling, SQL, and implementation using relational database system.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 23",
      },
      {
        category: "Common Courses",
        code: "DCIT 26",
        title: "Application Development and Emerging Technologies",
        description:
          "Development of applications using web, mobile, and emerging technologies with emphasis on requirements management, interface design, usability, testing, deployment, including ethical and legal considerations.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 55",
      },

      // =========================================================
      // PROFESSIONAL COURSES
      // =========================================================
      {
        category: "Professional Courses",
        code: "COSC 50",
        title: "Discrete Structure",
        description:
          "Sets, Functions, and Relations, and related operations to computer programming. Construct sound arguments in propositional and predicate logic by applying appropriate rules of inference given sample intelligent software. Construct valid mathematical proofs using mathematical induction, direct proof and proof by contradiction to simplify programs and prove program correctness.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "Professional Courses",
        code: "DCIT 55",
        title: "Advanced Database System",
        description:
          "The course examines the different techniques of warehousing and mining data that will support the organizational decisions. This also proposes possibilities on how to improve a specific algorithm as may be applied to data warehousing and mining.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 25",
      },
      {
        category: "Professional Courses",
        code: "DCIT 60",
        title: "Methods of Research",
        description:
          "Research methodologies, importance, processes. Thesis writing guidelines.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "3rd year standing",
      },
      {
        category: "Professional Courses",
        code: "DCIT 65",
        title: "Social and Professional Issues",
        description:
          "The course argues about the pros and cons of the design and implementation of computing solutions in various organizations.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "3rd year standing",
      },
      {
        category: "Professional Courses",
        code: "ITEC 60",
        title: "Integrated Programming and Technologies 1",
        description:
          "The course covers the design, development and testing of programs that use messaging services for asynchronous messages, SAX or DOM for parsing XML, XSL and XSLT for data transformation. This also aims to write, debug, and test scripts for operating system management.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 50 & ITEC 55",
      },
      {
        category: "Professional Courses",
        code: "ITEC 75",
        title: "System Integration and Architecture 1",
        description:
          "The course analyzes the appropriateness of a decision to in-source or out-source IT services in a given situation. Creation of testing environments and designing stress test using appropriate tools and techniques that impact system performance. Implementation of enterprise integration of middleware platforms are also discussed in the course.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 60",
      },
      {
        category: "Professional Courses",
        code: "ITEC 80",
        title: "Introduction to Human Computer Interaction",
        description:
          "The course focuses on the analysis of different user populations with regard to their abilities and characteristics for using both software and hardware products. Evaluation of the design of existing user interfaces based on the cognitive models of target user is also covered in the course.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "3rd year standing",
      },
      {
        category: "Professional Courses",
        code: "ITEC 85",
        title: "Information Assurance and Security 1",
        description:
          "The course examines the relationship between threats, vulnerabilities, countermeasures, attacks, compromises and remediation throughout the entire system life cycle. This also explains the key factors involved in authentication and how they are used to verify identity and grant access. Legal and ethical considerations related to the handling and management of enterprise information assets are also part of the course.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 75",
      },
      {
        category: "Professional Courses",
        code: "ITEC 90",
        title: "Network Fundamentals",
        description:
          "The course describes data communications and network models, topologies, protocol standards and architectures. Necessary hardware description and components used to establish communication between multiple networks and the analysis of the effect of various network topologies, application and devices on network performance. Analysis of routing algorithm protocols, process routing tables and router configuration for proper orientation of an efficient network is also discussed.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 55",
      },
      {
        category: "Professional Courses",
        code: "ITEC 95",
        title: "Quantitative Methods (Modeling & Simulation)",
        description:
          "Use of appropriate mathematical tools for decision making and implementation of mathematical methods in IT solutions to problems.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "COSC 50 & STAT 2",
      },
      {
        category: "Professional Courses",
        code: "ITEC 100",
        title: "Information Assurance and Security 2",
        description:
          "The course discusses the policies and practices to systems integration and architecture to ensure secure systems operation and information assurance. Explanation on how hardware and software installation contributes vulnerability in the organization.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 585",
      },
      {
        category: "Professional Courses",
        code: "ITEC 105",
        title: "Network Management",
        description:
          "The course aims to design, configure and deploy switches utilizing VLANs, trunking and port aggregation, implementation of multiple networks and their connection, equipment selection for a given network application and implementing load balances in routers and switches.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 90",
      },
      {
        category: "Professional Courses",
        code: "ITEC 110",
        title: "Systems Administration and Maintenance",
        description:
          "The course justifies how resources will be allocated for the various administrative domains, formulate policies governing the use of IT systems within the organization, recommend measures on how to administer and maintain systems effectively and modify configurations of operating system to implement policy.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 100",
      },
      {
        category: "Professional Courses",
        code: "ITEC 200A",
        title: "Capstone Project and Research 1",
        description:
          "The course lets the students formulate the project objectives, scope and limitations and evaluation metrics, collection and comparison of literature related to the project and the proposal of an ethical and feasible IT solution to the identified problems in the project.",
        units: 3,
        lecture: "—",
        laboratory: "—",
        prerequisite: "Capstone Ready",
      },
      {
        category: "Professional Courses",
        code: "ITEC 200B",
        title: "Capstone Project and Research 2",
        description:
          "The course lets the students implement the proposed IT solution, evaluate and interpret the performance results based on the identified evaluation metrics and recommend possible improvements in the IT solution due to implementation issues.",
        units: 3,
        lecture: "—",
        laboratory: "—",
        prerequisite: "ITEC 200A",
      },
      {
        category: "Professional Courses",
        code: "INSY 55",
        title: "System Analysis and Design",
        description:
          "Use systems thinking to analyze business processes and identify problems and opportunities that can be solved and supported by technology solutions. Tools, methods, models/techniques in systems analysis and design. Development of a project design proposal to be defended with different audiences.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "3rd year standing",
      },
      {
        category: "Professional Courses",
        code: "DCIT 50",
        title: "Object Oriented Programming",
        description:
          "The course compares and contrasts procedural/functional approach to object-oriented programming approach. This also covers designing, coding, testing and debugging programs using OOP concepts like abstraction, encapsulation, inheritance and polymorphism.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 23",
      },
      {
        category: "Professional Courses",
        code: "ITEC 50",
        title: "Web System and Technologies 1",
        description:
          "The course aims to develop web applications using HTML, XHTML and XML client-side programming and other Web GUI technologies to create, validate documents, generate contents via programming and integrate digital libraries with other media contents. The course also focuses on the set-up of a web server to support server-side processing in a secure fashion and identify common server-side configuration issues that affect securing.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 21",
      },
      {
        category: "Professional Courses",
        code: "ITEC 55",
        title: "Platform Technologies",
        description:
          "The course recommends an appropriate operating system based on given system requirements. This also covers planning and writing simple assembly-language programs and performing a cost-benefit analysis for proposed server solution.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "DCIT 23",
      },
      {
        category: "Professional Courses",
        code: "ITEC 65",
        title: "Open Source Technology",
        description:
          "This course will cover the fundamentals of Free and Open Source software development. Topics to be addressed include licensing, Linux, typical software development tools such as compilers, scripting languages, build tools, and version control software, applications, and techniques for managing remote servers.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "2nd year standing",
      },
      {
        category: "Professional Courses",
        code: "ITEC 70",
        title: "Multimedia Systems",
        description:
          "This is an introductory course in digital media. It is intended for students from all backgrounds who are interested in learning the foundational scientific concepts and the basic techniques of digital media production. The practical component is organized around learning about and using various software for manipulating digital sound, digital images, and digital video.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "2nd year standing",
      },
      {
        category: "Professional Courses",
        code: "ITEC 199",
        title: "Practicum (486 Hours)",
        description:
          "The course analyzes, designs, tests, maintains, and/or documents a software system as applied to a real-world problem as part of a team in an actual company environment.",
        units: 6,
        lecture: "—",
        laboratory: "—",
        prerequisite: "4th year standing",
      },

      // =========================================================
      // PROFESSIONAL ELECTIVES
      // =========================================================
      {
        category: "Professional Electives",
        code: "ITEC 101",
        title: "IT Elective 1 (Human Computer Interaction 2)",
        description:
          "The course aims on the development of prototype interfaces for users with specific disability issues. Perform usability evaluation of an existing software based on general principles used in heuristic evaluation, usability performance and preference metrics and common guidelines and standards.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 50",
      },
      {
        category: "Professional Electives",
        code: "ITEC 106",
        title: "IT Elective 2 (Web System and Technologies 2)",
        description:
          "The course covers deployment and serving media contents within web applications. Implementation of websites and integration with other applications is included. Students must also look at possible improvements in the implementation of web applications to enhance security and avoid vulnerabilities.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 50",
      },
      {
        category: "Professional Electives",
        code: "ITEC 111",
        title: "IT Elective 3 (Integrated Programming and Technologies 2)",
        description:
          "The course compares and contrasts the different encrypting and decrypting techniques for ensuring data security. This also recommends where selection for a scripting language and an application language would be more appropriate.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 60",
      },
      {
        category: "Professional Electives",
        code: "ITEC 116",
        title: "IT Elective 4 (Systems Integration and Architecture 2)",
        description:
          "The course summarizes and analyzes the data from usability test and recommends appropriate actions, construction of architectural models for complex systems using architectural networks, development of components and the demonstration of its integration into an existing environment.",
        units: 3,
        lecture: "2 hours/week",
        laboratory: "3 hours/week",
        prerequisite: "ITEC 75",
      },

      // =========================================================
      // ADDITIONAL MATH
      // =========================================================
      {
        category: "Additional Math Requirement",
        code: "STAT 2",
        title: "Applied Statistics",
        description:
          "Elementary statistical methods and applications to engineering problems, samples and populations, frequency distributions, probability theory, basic distributions, random sampling, point and interval estimation, hypothesis testing and linear regression and correlation are studied.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "2nd year standing",
      },

      // =========================================================
      // PHYSICAL EDUCATION
      // =========================================================
      {
        category: "Physical Education",
        code: "FITT 1",
        title: "Movement Enhancement",
        description:
          "This course provides trainings in different movement patterns and core engagement in conjunction with principles of healthy and physically active life. Students will be taught to adjust and transfer the movement competency in different contexts (i.e. use of training equipment).",
        units: 2,
        lecture: "2 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "Physical Education",
        code: "FITT 2",
        title: "Fitness Exercises",
        description:
          "This course provides experiences in core stability, strength and mobility training. It includes goal setting exercise progression and regression and periodic assessment for the development of various fitness components.",
        units: 2,
        lecture: "2 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "FITT 1",
      },
      {
        category: "Physical Education",
        code: "FITT 3",
        title: "Physical Activities Toward Health and Fitness 1",
        description:
          "This course will provide activities for the purpose of optimizing health and fitness. Students will choose from a menu of course offering in dance, sports, and outdoor adventure activities.",
        units: 2,
        lecture: "2 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "FITT 2",
      },
      {
        category: "Physical Education",
        code: "FITT 4",
        title: "Physical Activities Toward Health and Fitness 1",
        description:
          "This course will provide activities for the purpose of optimizing health and fitness. Students will choose from a menu of course offering in dance, sports, and outdoor adventure activities.",
        units: 2,
        lecture: "2 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "FITT 3",
      },

      // =========================================================
      // NSTP
      // =========================================================
      {
        category: "NSTP",
        code: "NSTP 1",
        title: "National Service Training Program 1 (Civil Welfare Training Service Component)",
        description:
          "The National Service Training Program I – Civil Welfare Training Services (CWTS 1) is a course designed to help students understand, appreciate and eventually live by the concepts of the National Service Reserve Corps and become a resource for community development.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "None",
      },
      {
        category: "NSTP",
        code: "NSTP 2",
        title: "National Service Training Program 2 (Civil Welfare Training Service Component)",
        description:
          "The National Service Training Program 2 (NSTP-CWTS 2) is a sequel to NSTP-CWTS 1. It is designed to equip students with the fundamentals of project identification, planning and implementation in pursuit of contributing to the upliftment of the general welfare and quality of life of people in the community.",
        units: 3,
        lecture: "3 hours/week",
        laboratory: "0 hour/week",
        prerequisite: "NSTP 1",
      },
    ],
  },
];

export const areas = [
  {
    icon: Code2,
    title: "Programming",
    description:
      "Develop computational thinking and practical programming skills.",
  },
  {
    icon: Database,
    title: "Data & Systems",
    description:
      "Work with databases, information systems, and data-driven applications.",
  },
  {
    icon: Network,
    title: "Networks & Infrastructure",
    description:
      "Understand the technologies that connect systems and devices.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Learn principles for protecting information and computing resources.",
  },
];

export function getProgramById(id) {
  return programs.find((program) => program.id === id);
}
