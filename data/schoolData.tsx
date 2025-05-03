import {ExperienceDataModel} from '@/models/experienceDataModel';

import NusImage from '@/public/school/nus.svg';
import GatechImage from '@/public/school/gatech.svg';

const gatech: ExperienceDataModel = {
  logo: GatechImage,
  logoAlt: 'Georgia Institute of Technology logo',
  company: 'Georgia Institute of Technology',
  title: 'Master of Science in Computer Science',
  date: 'Aug 2024 - Present',
  description: [
    {
      text: 'GPA: 4.00 / 4.00',
      id: 'gatech_description_1',
    },
  ],
  id: 'gatech_school',
};

const nus: ExperienceDataModel = {
  logo: NusImage,
  logoAlt: 'National University of Singapoe logo',
  company: 'National University of Singapore',
  title: 'Bachelor of Computing in Computer Science (Honors)',
  date: 'Aug 2020 - Jan 2024',
  description: [
    {
      text: 'GPA: 4.78 / 5.00 (Highest Distinction)',
      id: 'nus_description_1',
    },
    {
      text: 'Artificial Intelligence Focus Area (Distinction)',
      id: 'nus_description_2',
    },
    {
      text: "Dean's List: AY22/23 Sem 1, AY23/24 Sem 1",
      id: 'nus_description_3',
    },
  ],
  id: 'nus_school',
};

export const SchoolData: ExperienceDataModel[] = [gatech, nus];
