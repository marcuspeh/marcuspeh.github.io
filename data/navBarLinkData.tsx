import NavBarLinkModel from  "@/models/navbarLinkModel"

const about: NavBarLinkModel = {
  link: "#about",
  text: "About",
  id: "about_navbar_link"
}

const skills: NavBarLinkModel = {
  link: "#skills",
  text: "Skills",
  id: "skills_navbar_link"
}

const experience: NavBarLinkModel = {
  link: "#experience",
  text: "Experience",
  id: "experience_navbar_link"
}

const projects: NavBarLinkModel = {
  link: "#projects",
  text: "Project",
  id: "projects_navbar_link"
}

const contact: NavBarLinkModel = {
  link: "#contact",
  text: "Contact",
  id: "contact_navbar_link"
}

export const NavBarLinkData = [
  about,
  skills,
  experience,
  projects,
  contact
] 