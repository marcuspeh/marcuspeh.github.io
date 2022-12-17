import SkillsDataModel from "../models/skillsDataModel"

const ProgrammingLanguage: SkillsDataModel = {
  "header": "Programming Language",
  "skills": "Python, Java, C, C++, Dart, JavaScript, TypeScript"
}

const LibraryLanguage: SkillsDataModel = {
  "header": "Libraries & Frameworks",
  "skills": "ReactJs, NextJs, Django, Flutter, React Native, Junit, Pandas, Tabula, Tensorflow"
}

const Databases: SkillsDataModel = {
  "header": "Databases",
  "skills": "Postgres, SQLite, MongoDB"
}

const Tools: SkillsDataModel = {
  "header": "Tools",
  "skills": "Figma, Heroku, Vercel, Git"
}

const SoftSkills: SkillsDataModel = {
  "header": "Soft Skills",
  "skills": "Leadership, Problem Solving, Team Player, Independent"
}

export const SkillsData: SkillsDataModel[] = [
  ProgrammingLanguage,
  LibraryLanguage,
  Databases,
  Tools,
  SoftSkills
]
