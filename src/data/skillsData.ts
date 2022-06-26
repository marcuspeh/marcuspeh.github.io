interface skillsObject {
    "header": string,
    "skills": string,
}

const ProgrammingLanguage: skillsObject = {
    "header": "Programming Language",
    "skills": "Python, Java, C, C++, Dart, JavaScript, TypeScript"
}

const LibraryLanguage: skillsObject = {
    "header": "Libraries & Frameworks",
    "skills": "ReactJs, NextJs, Django, Flutter, Junit, Pandas, Tabula, Tensorflow"
}

const Databases: skillsObject = {
    "header": "Databases",
    "skills": "Postgres, SQLite, MongoDB"
}

const Tools: skillsObject = {
    "header": "Tools",
    "skills": "Figma, Heroku, Git"
}

const SoftSkills: skillsObject = {
    "header": "Soft Skills",
    "skills": "Leadership, Problem Solving, Team Player, Independent"
}

export const SkillsData: skillsObject[] = [
    ProgrammingLanguage,
    LibraryLanguage,
    Databases,
    Tools,
    SoftSkills
]
