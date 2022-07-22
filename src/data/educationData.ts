interface educationObject {
  "univerity": string,
  "major": string,
  "gpa": string,
  "date": string,
  "modules": string[]
}

export const EducationData: educationObject = {
  "univerity": "National University Of Singapore",
  "major": "Bachelor of Computing, Computer Science (Honors)",
  "gpa": "4.72 / 5.00",
  "date": "August 2020 - May 2024",
  "modules": [
    `CS1010X: Programming Methodology I`,
    `CS1231S: Discrete Structures`,
    `CS2030S: Programming Methodology II`,
    `CS2040S: Data Structures and Algorithms`,
    `CS2100: Computer Organisation`,
    `CS2102: Database Systems`,
    `CS2103T: Software Engineering`,
    `CS2106: Introduction to Operating Systems`,
    `CS2107: Introduction to Information Security`,
    `CS3243: Introduction to Artificial Intelligence`
  ]
}