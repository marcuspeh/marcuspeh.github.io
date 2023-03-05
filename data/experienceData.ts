import ExperienceDataModel from "../models/experienceDataModel"
import GovtechIcon from "../assets/company/govtech.png"
import NusIcon from "../assets/company/nus.png"
import ReluvateIcon from "../assets/company/reluvate.jpg"
import RobotoIcon from "../assets/company/roboto.png"
import GoogleIcon from "../assets/company/google.png"
import BytedanceIcon from "../assets/company/bytedance.png"

const bytedanceIntern: ExperienceDataModel = {
  "title": "Incoming Software Engineering Intern (Global Payments)",
  "logo": BytedanceIcon,
  "header": "Bytedance",
  "company": "Bytedance",
  "date": "Aug 2023 - Dec 2023",
  "description": [
    "To be updated..."
  ]
}

const googleIntern: ExperienceDataModel = {
  "title": "Incoming Software Engineering Intern (Google Pay)",
  "logo": GoogleIcon,
  "header": "Google",
  "company": "Google",
  "date": "May 2023 - Aug 2023",
  "description": [
    "To be updated..."
  ]
}

const uventsDeveloper: ExperienceDataModel = {
  "title": "Software Developer (UVENTS)",
  "logo": NusIcon,
  "header": "NUS IT",
  "company": "NUS Information Technology",
  "date": "Jan 2023 - Present",
  "description": [
    "Developed NUS event management portal with more than 10000 users.",
    "Hardened portal against potential attacks.",
    "Added extra features such as scheduled email reminder."
  ]
}

const govTechIntern: ExperienceDataModel = {
  "title": "Software Engineering Intern",
  "logo": GovtechIcon,
  "header": "GovTech",
  "company": "Government Technology Agency",
  "date": "May 2022 - Jul 2022, Dec 2022 - Jan 2023",
  "description": [
    "Reduced loading time of web page by 10% by removing unnecessary API calls.",
    "Improved security by implementing Two-Factor Authentication (2FA).",
    "Increased server query response time under load by 200x through API restructuring."
  ]
}

const reluvateIntern: ExperienceDataModel = {
  "title": "Software Engineering Intern",
  "logo": ReluvateIcon,
  "header": "Reluvate",
  "company": "Reluvate Technologies",
  "date": "Nov 2021 - Jan 2022",
  "description": [
    "Established end to end web applications to house AI and Automation solutions.",
    "Created backend APIs for a multi-national real-estate company.",
    "Constructed Optical Character Recognition (OCR) to process pdf with more than 95% accuracy."
  ]
}

const nusTa: ExperienceDataModel = {
  "title": "Teaching Assistant",
  "logo": NusIcon,
  "header": "NUS",
  "company": "National University of Singapore",
  "date": "Jan 2021 - Present",
  "description": [
    "Led more than 60 students towards active learning of Computer Science modules.",
    "Mentored students by providing apt feedback to queries and assignments.",
  ],
  "listHeader": "Modules taught:",
  "listContent": [
    "CS1010X Programming Methodology I (2021 Spring)",
    "CS2030S Programming Methodology II (2021 Fall)",
    "CS2040S Data Structures and Algorithms (2022 Spring)",
    "CS2103T Software Engineering (2022 Fall, 2022 Spring)"
  ]
}

const robotoFreelance: ExperienceDataModel = {
  "title": "Coding Instructor",
  "logo": RobotoIcon,
  "header": "Roboto",
  "company": "Roboto Coding Academy",
  "date": "Jul 2020 - Present",
  "description": [
    "Administered coding lessons for kids from age of 5 to 15 to ignite interest in coding",
    "Curated curriculum in Python, Html etc.",
    "Taught in schools such as Victoria School and Chung Cheng High School."
  ]
}


const ExperienceData: ExperienceDataModel[] = [
  bytedanceIntern,
  googleIntern,
  uventsDeveloper,
  nusTa,
  robotoFreelance,
  govTechIntern,
  reluvateIntern,
]

export default ExperienceData