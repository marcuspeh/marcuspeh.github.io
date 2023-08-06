import { StaticImageData } from "next/image";

interface ContactDataModel {
  pic: StaticImageData,
  link: string,
  text: string,
  id: string
}


export default ContactDataModel