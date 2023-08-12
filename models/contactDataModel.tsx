import {StaticImageData} from 'next/image';

export interface ContactDataModel {
  pic: StaticImageData;
  link: string;
  text: string;
  id: string;
}
