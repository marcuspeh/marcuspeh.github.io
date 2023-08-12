import {StaticImageData} from 'next/image';

interface DescriptionModel {
  text: string;
  id: string;
}

export interface ExperienceDataModel {
  logo: StaticImageData;
  logoAlt: string;
  company: string;
  title: string;
  date: string;
  description: DescriptionModel[];
  id: string;
}
