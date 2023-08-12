import ExperienceDataModel from "@/models/experienceDataModel"

import RobotoImage from "@/public/teach/roboto.svg"
import NusImage from "@/public/teach/nus.svg"

const roboto: ExperienceDataModel = {
  logo: RobotoImage,
  logoAlt: "Roboto Coding Academy logo",
  company: "Roboto Coding Academy",
  title: "Coding Instructor",
  date: "Jul 2020 - Present",
  description: [],
  id: "roboto_teaching",
}

const nusTa: ExperienceDataModel = {
  logo: NusImage,
  logoAlt: "National University of Singapoe logo",
  company: "National University of Singapore",
  title: "Teaching Assistant",
  date: "Jan 2021 - May 2023",
  description: [
    { 
      text: "CS2103T Software Engineering (2023 Spring)", 
      id: "cs2103tSpring2023_description_1"
    },
    { 
      text: "CS2103T Software Engineering (2022 Fall)", 
      id: "cs2103tFall2022_description_1"
    },
    { 
      text: "CS2040S Data Structures and Algorithms (2022 Spring)", 
      id: "cs2040sSpring2022_description_1"
    },
    { 
      text: "CS2030S Programming Methodology II (2021 Fall)", 
      id: "cs2030sFall2022_description_1"
    },
    { 
      text: "CS1010X Programming Methodology I (2021 Spring)", 
      id: "cs1010xSpring2021_description_1"
    }
  ],
  id: "nusta_teaching",
}


export const TeachData = [
  roboto,
  nusTa,
]