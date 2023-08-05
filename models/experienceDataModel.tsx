import { StaticImageData } from "next/image";

interface DescriptionModel {
  text: string,
  id: string
}

interface ExperienceDataModel {
  logo: StaticImageData,
  logoAlt: string,
  company: string,
  title: string,
  date: string,
  description: DescriptionModel[],
  id: string
}

export default ExperienceDataModel