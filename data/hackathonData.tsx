import {ExperienceDataModel} from '@/models/experienceDataModel';

import OgpImage from '@/public/hack/ogp.svg';
import JpmImage from '@/public/hack/jpm.svg';
import GicImage from '@/public/hack/gic.svg';
import NusHackersImage from '@/public/hack/nushackers.svg';
import GoogleImage from '@/public/hack/google.svg';
import TiktokImage from '@/public/hack/tiktok.svg';

const tiktokEngHackathon2024: ExperienceDataModel = {
  logo: TiktokImage,
  logoAlt: 'Tiktok Product logo',
  company: 'TikTok',
  title: 'TikTok Engineering Hackathon 2024',
  date: 'Nov 2024',
  description: [
    {
      text: 'Developed a product that transforms user prompts into actionable SQL queries and visual dashboards',
      id: 'tiktokEngHackathon2024_description_1',
    },
    {
      text: 'Integrated LLM to dynamically generate SQL queries from natural language inputs',
      id: 'tiktokEngHackathon2024_description_2',
    },
    {
      text: 'Designed an intuitive UI allowing users to customize chart types and data axes for visualizations',
      id: 'tiktokEngHackathon2024_description_3',
    },
  ],
  id: 'tiktokEngHackathon2024_hackathon',
};

const buildForGood2023: ExperienceDataModel = {
  logo: OgpImage,
  logoAlt: 'Open Government Product logo',
  company: 'Open Government Product',
  title: 'Build For Good 2023',
  date: 'Jun 2023',
  description: [
    {
      text: 'Engineered user-friendly solution for simplifying medical health reports for general public',
      id: 'buildForGood2023_description_1',
    },
    {
      text: 'Talked to domain experts and stakeholders for gathering essential requirements',
      id: 'buildForGood2023_description_2',
    },
    {
      text: 'Pitched to ministers and other government officials',
      id: 'buildForGood2023_description_3',
    },
  ],
  id: 'buildForGood2023_hackathon',
};

const helloAi2023: ExperienceDataModel = {
  logo: GoogleImage,
  logoAlt: 'Google logo',
  company: 'Open Government Product',
  title: "Hello AI 2023 (Google's internal hackathon)",
  date: 'Jun 2023',
  description: [
    {
      text: 'Built Large Language Model (LLM) prototype for more inclusive search results, incorporating diverse cultural perspectives',
      id: 'helloAi2023_description_1',
    },
    {
      text: 'Pitched the Artificial intelligence (AI) solution, showcasing strong communication and presentation skills',
      id: 'helloAi2023_description_2',
    },
    {
      text: 'Ranked among the top 10 teams, demonstrating teamwork and excellence in problem-solving',
      id: 'helloAi2023_description_3',
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
  tiktokEngHackathon2024,
  buildForGood2023,
  helloAi2023,
  codeForGood2022,
  codeToImpact2022,
  hackAndRoll2022,
];
