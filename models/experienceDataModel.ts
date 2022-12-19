import { StaticImageData } from "next/image";

interface ExperienceDataModel {
  "title": string,
  "logo": StaticImageData,
  "header": string,
  "company": string,
  "date": string,
  "description": string[],
  "listHeader"?: string,
  "listContent"?: string[]
}

export default ExperienceDataModel