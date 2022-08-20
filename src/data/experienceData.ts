interface experienceData {
  "title": string,
  "company": string,
  "date": string,
  "description": string,
  "listHeader"?: string,
  "listContent"?: string[]
}

const govTechIntern: experienceData = {
  "title": "Software Engineering Intern",
  "company": "Government Technology Agency",
  "date": "May 2022 - Jul 2022",
  "description": 
    "Developed platform to crowdsource sentiments from members of public. " +
    "Improved security by implementing Two-Factor Authentication (2FA). " +
    "Increased server query response time under load by 200x through API restructuring."
}

const reluvateIntern: experienceData = {
  "title": "Software Engineering Intern",
  "company": "Reluvate Technologies",
  "date": "Nov 2021 - Jan 2022",
  "description":
    "Established end to end web applications to house AI and Automation solutions. " +
    "Created backend APIs for a multi-national real-estate company. " +
    "Developed Optical character recognition (OCR) to process pdf."
}

const orbital: experienceData = {
  "title": "Software Developer",
  "company": "NUS Orbital Program",
  "date": "May 2021 - Jul 2022",
  "description":
    "Competed in the NUS Orbital Software Development Program to achieve Artemis (Distinction). " +
    "Utilized MERN stack to manage inventory and manage sales. " +
    "Employed comprehensive end-to-end testing of primary user flows with Cypress."
}

const nusTa: experienceData = {
  "title": "Teaching Assistant",
  "company": "National University of Singapore",
  "date": "Jan 2021 - Present",
  "description": 
    "Led more than 60 students towards active learning of Computer Science modules. " +
    "Mentored students by providing apt feedback to queries and assignments.",
  "listHeader": "Modules taught:",
  "listContent": [
    "CS1010X Programming Methodology I (2021 Spring)",
    "CS2030S Programming Methodology II (2021 Fall)",
    "CS2040S Data Structures and Algorithms (2022 Spring)",
    "CS2103T Software Engineering (2022 Fall)"
  ]
}

const robotoFreelance: experienceData = {
  "title": "Coding Instructor",
  "company": "Roboto Coding Academy",
  "date": "Jul 2020 - Present",
  "description": 
    "Administered coding lessons for kids from age of 5 to 15 to ignite interest in coding. " +
    "Curated curriculum in Python, Html etc. " +
    "Taught in prestigious schools such as Victoria School and Chung Cheng High School. "
}

const robotoIntern: experienceData = {
  "title": "Product Development Intern",
  "company": "Roboto Coding Academy",
  "date": "Jan 2020 - Jun 2020",
  "description": 
    "Devised customizable coding curriculum to be taught in schools nationwide. " +
    "Assimilated video and hands on activities to engage students during lessons. " +
    "Incorporated robots to trigger interest and deepen students' understanding of core coding concept. "
}

export const ExperienceData: experienceData[] = [
  nusTa,
  robotoFreelance,
  govTechIntern,
  reluvateIntern,
  orbital,
  robotoIntern
]