import {type StaticImageData} from 'next/image';

import TikTokLogo from '@/public/work/tiktok.svg';
import GoogleLogo from '@/public/work/google.svg';
import ByteDanceLogo from '@/public/work/bytedance.svg';
import GovTechLogo from '@/public/work/govtech.svg';

export interface ExperienceItem {
  id: string;
  company: string;
  logo: StaticImageData;
  role: string;
  period: string;
  location: string;
  narrative?: string;
  highlights?: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'tiktok',
    company: 'TikTok',
    logo: TikTokLogo,
    role: 'Software Engineer · Backend & Frontend',
    period: 'Apr 2024 — Present',
    location: 'Singapore',
    narrative:
      'Building high-scale query infrastructure and data products at TikTok. I improved the realtime user segmentation system to sustain over 2M peak QPS at approximately 30ms P99 with over 99.99% SLA, re-architected Hive-to-ClickHouse loading to reduce data readiness time by 73%, and designed a multi-region on-demand pipeline for cohort-level Creator Analysis with 30%+ user penetration.',
    highlights: [
      'Sustained over 2M peak QPS at approximately 30ms P99 with over 99.99% SLA by optimizing realtime user segmentation system cache access patterns.',
      'Reduced data readiness time by 73% (5.5 hours → 1.5 hours) by re-architecting Hive-to-ClickHouse data loading.',
      'Designed and built a multi-region, on-demand data pipeline for cohort-level Creator Analysis, reaching 30%+ user penetration.',
      'Expanded Data Suite query capabilities with a visualization engine supporting direct ClickHouse queries and configurable virtual columns.',
    ],
    stack: [
      'Go',
      'Python',
      'TypeScript',
      'SQL',
      'Redis',
      'ClickHouse',
      'MySQL',
      'React',
    ],
  },
  {
    id: 'google',
    company: 'Google',
    logo: GoogleLogo,
    role: 'Software Engineering Intern · Google Pay',
    period: 'May 2023 — Aug 2023',
    location: 'Singapore',
    highlights: [
      'Refined the onboarding verification flow on Google Pay’s merchant application (Android).',
      'Reduced QR code loading time by 93.5% (1.38s → 0.09s) by eliminating unnecessary RPC calls.',
      'Lowered proximity verification range by 99.5% (2km → 10m) by leveraging Bluetooth Low Energy.',
    ],
    stack: ['Java', 'Protocol Buffers', 'gRPC'],
  },
  {
    id: 'bytedance',
    company: 'ByteDance',
    logo: ByteDanceLogo,
    role: 'Backend Software Engineering Intern · Global Payments',
    period: 'Aug 2023 — Dec 2023',
    location: 'Singapore',
    highlights: [
      'Improved channel rating API performance by 90%+ by precomputing data and parallelizing category calculations with Go goroutines.',
      'Integrated internal approval tooling into the existing approval workflow, improving processing efficiency by 30%.',
    ],
    stack: ['Go', 'MongoDB'],
  },
  {
    id: 'govtech',
    company: 'GovTech',
    logo: GovTechLogo,
    role: 'Software Engineering Intern · CrowdTaskSG',
    period: 'May 2022 — Jul 2022, Dec 2022 — Jan 2023',
    location: 'Singapore',
    highlights: [
      'Reduced server query response time under load by 200× by restructuring API request handling and reducing redundant database queries.',
      'Reduced web page loading time by 10% by refactoring frontend call logic and removing unnecessary synchronous API calls.',
      'Strengthened security by implementing Two-Factor Authentication, mitigating unauthorized access risks.',
    ],
    stack: ['TypeScript', 'ReactJS', 'PostgreSQL'],
  },
];
