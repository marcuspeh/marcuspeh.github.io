import {ExperienceDataModel} from '@/models/experienceDataModel';

import BytedanceImage from '@/public/work/bytedance.svg';
import GoogleIcon from '@/public/work/google.svg';
import GovtechIcon from '@/public/work/govtech.svg';
import ReluvateIcon from '@/public/work/reluvate.svg';

const bytedance: ExperienceDataModel = {
  logo: BytedanceImage,
  logoAlt: 'Bytedance logo',
  company: 'Bytedance',
  title: 'Software Engineering Intern (Global Payments)',
  date: 'Aug 2023 - Present',
  description: [
    {
      text: 'Improve efficiency of approval process by integrating in-house solution',
      id: 'bytedance_description_1',
    },
    {
      text: 'Worked on channel platform, with daily transactions of over USD 1 million',
      id: 'bytedance_description_2',
    },
  ],
  id: 'bytedance_internship',
};

const google: ExperienceDataModel = {
  logo: GoogleIcon,
  company: 'Google',
  logoAlt: 'Google logo',
  title: 'Software Engineering Intern (Google Pay)',
  date: 'May 2023 - Aug 2023',
  description: [
    {
      text: 'Reduced memory usage by fixing at least 32 memory leak issues and resolving 195 violations',
      id: 'google_description_1',
    },
    {
      text: 'Decreased QR code loading time by 93.5% from 1.38s to 0.09s by removing RPC call',
      id: 'google_description_2',
    },
    {
      text: 'Lowered proximity verification range by 99.5% from 2km to 10m by using Bluetooth Low Energy',
      id: 'google_description_3',
    },
  ],
  id: 'google_internship',
};

const govtech: ExperienceDataModel = {
  logo: GovtechIcon,
  company: 'Government Technology Agency',
  logoAlt: 'GovTech logo',
  title: 'Software Engineering Intern (CrowdTaskSG)',
  date: 'May 2022 - Jul 2022, Dec 2023 - Jan 2023',
  description: [
    {
      text: 'Reduced loading time of web page by 10% by removing unnecessary API calls',
      id: 'govtech_description_1',
    },
    {
      text: 'Improved security by implementing Two-Factor Authentication (2FA)',
      id: 'govtech_description_2',
    },
    {
      text: 'Increased server query response time under load by 200x through API restructuring',
      id: 'govtech_description_3',
    },
  ],
  id: 'govtech_internship',
};

const reluvate: ExperienceDataModel = {
  logo: ReluvateIcon,
  company: 'Reluvate Technogies',
  logoAlt: 'Reluvate Technogies logo',
  title: 'Software Engineering Intern',
  date: 'Nov 2021 - Jan 2022',
  description: [
    {
      text: 'Established end to end web applications to house AI and Automation solutions',
      id: 'reluvate_description_1',
    },
    {
      text: 'Created backend APIs for a multi-national real-estate company',
      id: 'reluvate_description_2',
    },
    {
      text: 'Constructed Optical Character Recognition (OCR) to process pdf with more than 95% accuracy',
      id: 'reluvate_description_3',
    },
  ],
  id: 'reluvate_internship',
};

export const WorkData: ExperienceDataModel[] = [
  bytedance,
  google,
  govtech,
  reluvate,
];
