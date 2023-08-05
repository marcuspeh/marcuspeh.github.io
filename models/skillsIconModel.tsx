import { StaticImageData } from "next/image";

interface SkillsIconModel {
  pic: StaticImageData,
  link: string,
  text: string,
  id: string
}

export default SkillsIconModel