interface TechStack {
  link: string,
  text: string,
  id: string
}

interface ProjectDataModel {
  pic: string,
  link: string,
  title: string,
  description: string,
  tech: TechStack[]
  id: string
}


export default ProjectDataModel