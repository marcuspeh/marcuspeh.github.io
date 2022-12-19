import { StaticImageData } from "next/image";

interface ProjectDataModel {
  "title": string,
  "techStacks": string[],
  "description": string,
  "projectLink": string,
  "backgroundImage": StaticImageData
}

export default ProjectDataModel