import {ExperienceDataModel} from '@/models/experienceDataModel';

import OgpImage from '@/public/hack/ogp.svg';
import JpmImage from '@/public/hack/jpm.svg';
import GicImage from '@/public/hack/gic.svg';
import NusHackersImage from '@/public/hack/nushackers.svg';
import GoogleImage from '@/public/hack/google.svg';

const buildForGood2023: ExperienceDataModel = {
  logo: OgpImage,
  logoAlt: 'Open Government Product logo',
  company: 'Open Government Product',
  title: 'Build For Good 2023',
  date: 'Jun 2023',
  description: [
    {
      text: 'Engineered solution to simplify medical health report for the general public',
      id: 'buildForGood2023_description_1',
    },
    {
      text: 'Implemented the parsing of pdf report',
      id: 'buildForGood2023_description_2',
    },
    {
      text: 'Utilized Large Language Model (LLM) and hard coded data process health report data',
      id: 'buildForGood2023_description_3',
    },
  ],
  id: 'buildForGood2023_hackathon',
};

const helloAi2023: ExperienceDataModel = {
  logo: GoogleImage,
  logoAlt: 'Google logo',
  company: 'Open Government Product',
  title: 'Hello AI 2023 (Google\s internal hackathon)',
  date: 'Jun 2023',
  description: [
    {
      text: 'Engineered solution to get more inclusive responses from Large Language Model (LLM)',
      id: 'helloAi2023_description_1',
    },
    {
      text: 'Made it into the top 10 teams',
      id: 'helloAi2023_description_2',
    },
  ],
  id: 'helloAi2023_hackathon',
};

const codeForGood2022: ExperienceDataModel = {
  logo: JpmImage,
  logoAlt: 'J.P. Morgan logo',
  company: 'J.P. Morgan',
  title: 'Code For Good 2022',
  date: 'Oct 2022',
  description: [
    {
      text: 'Built prototype for social good organization (SG Assist) to better serve constituents',
      id: 'codeForGood2022_description_1',
    },
    {
      text: 'Consolidated ideas to formulate product features',
      id: 'codeForGood2022_description_2',
    },
    {
      text: 'Streamline process of application for support / grant',
      id: 'codeForGood2022_description_3',
    },
  ],
  id: 'codeForGood2022_hackathon',
};

const codeToImpact2022: ExperienceDataModel = {
  logo: GicImage,
  logoAlt: 'GIC logo',
  company: 'GIC',
  title: 'Code to Impact 2022',
  date: 'Sep 2022',
  description: [
    {
      text: 'Delivered an instrument tracking web application catered to business',
      id: 'codeToImpact2022_description_1',
    },
    {
      text: 'Added extra features such as cross checking of data and logging system',
      id: 'codeToImpact2022_description_2',
    },
    {
      text: 'Spearheaded team of 5 to win 2nd runner up',
      id: 'codeToImpact2022_description_3',
    },
  ],
  id: 'codeToImpact2022_hackathon',
};

const hackAndRoll2022: ExperienceDataModel = {
  logo: NusHackersImage,
  logoAlt: 'NUS Hackers logo',
  company: 'NUS Hackers',
  title: 'Hack & Roll 2022',
  date: 'Jan 2022',
  description: [
    {
      text: 'Created expense splitting phone application to target pain point of group travel',
      id: 'hackAndRoll2022_description_1',
    },
    {
      text: 'Developed backend in Django',
      id: 'hackAndRoll2022_description_2',
    },
  ],
  id: 'hackAndRoll2022_hackathon',
};

export const HackathonData: ExperienceDataModel[] = [
  buildForGood2023,
  helloAi2023,
  codeForGood2022,
  codeToImpact2022,
  hackAndRoll2022,
];
