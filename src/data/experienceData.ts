interface educationObject {
  "title": string,
  "company": string,
  "date": string,
  "description": string,
  "listHeader"?: string,
  "listContent"?: string[]
}

const govTechIntern: educationObject = {
  "title": "Software Engineering Intern",
  "company": "GovTech",
  "date": "May 2022 - Jul 2022",
  "description": "" +
    "Improved security by implementing 2FA. " +
    "Speed up API response time to 0.5% of the original time."
}

const reluvateIntern: educationObject = {
  "title": "Software Engineering Intern",
  "company": "Reluvate Technologies",
  "date": "Nov 2021 - Jan 2022",
  "description":
    "Worked on end to end web applications to house AI and Automation solutions. " +
    "Created backend APIs for a multi-national real-estate company. " +
    "Developed Optical character recognition (OCR) to process pdf."
}

const nusTa: educationObject = {
  "title": "Teaching Assistant",
  "company": "National University of Singapore",
  "date": "Jan 2021 - Present",
  "description": 
    "Took charge and led students towards active learning of Computer Science modules. " +
    "Mentored students by providing apt feedback to queries and assignments.",
  "listHeader": "Modules taught:",
  "listContent": [
    "CS1010X Programming Methodology I (2021 Spring)",
    "CS2030S Programming Methodology II (2021 Fall)",
    "CS2040S Data Structures and Algorithms (2022 Spring)"
  ]
}

const robotoFreelance: educationObject = {
  "title": "Coding Instructor",
  "company": "Roboto Coding Academy",
  "date": "Jul 2020 - Present",
  "description": 
    "Conducted coding lessons for kids from age of 5 to 15 to ignite interest in coding. " +
    "Curated curriculum in Python, Html etc. " +
    "Taught in prestigious schools such as Victoria School and Chung Cheng High School. "
}

const robotoIntern: educationObject = {
  "title": "Product Development Intern",
  "company": "Roboto Coding Academy",
  "date": "Jan 2020 - Jun 2020",
  "description": 
    "Devised customizable coding curriculum to be taught in schools nationwide. " +
    "Assimilated video and hands on activities to engage students during lessons. " +
    " Incorporated robots to trigger interest and deepen students' understanding of core coding concept."
}

export const ExperienceData: educationObject[] = [
  govTechIntern,
  reluvateIntern,
  nusTa,
  robotoFreelance,
  robotoIntern
]