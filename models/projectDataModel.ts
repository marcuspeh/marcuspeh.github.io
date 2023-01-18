import { StaticImageData } from "next/image";

interface ProjectDataModel {
  "title": string,
  "techStacks": string[],
  "description": string,
  "projectLink": string,
  "image": StaticImageData
}

export default ProjectDataModel