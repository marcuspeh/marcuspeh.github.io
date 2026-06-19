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
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'tiktok',
    company: 'TikTok',
    logo: TikTokLogo,
    role: 'Backend Software Engineer',
    period: 'Apr 2024 — Present',
    location: 'Singapore',
    highlights: [
      'Built a low-code widget framework adopted by 70%+ of table use cases across TikTok Live.',
      'Shipped realtime indicators improving creator UV by 40% during live operations.',
      'Reduced request latency by 30%+ with Redis caching for high-traffic data widgets.',
    ],
    stack: ['Java', 'Spring Boot', 'Redis', 'MySQL'],
  },
  {
    id: 'google',
    company: 'Google',
    logo: GoogleLogo,
    role: 'Software Engineering Intern',
    period: 'May 2023 — Aug 2023',
    location: 'Singapore',
    highlights: [
      'Optimized QR code loading by 93.5% (1.38s → 0.09s) by removing redundant RPC calls in Google Pay.',
      'Improved Bluetooth proximity accuracy from 2km to 10m using BLE signal processing.',
    ],
    stack: ['Java', 'Protocol Buffers', 'gRPC'],
  },
  {
    id: 'bytedance',
    company: 'ByteDance',
    logo: ByteDanceLogo,
    role: 'Software Engineering Intern',
    period: 'Aug 2023 — Dec 2023',
    location: 'Singapore',
    highlights: [
      'Improved API performance by 90%+ for a payments channel platform processing $7.5B+ monthly.',
      'Integrated in-house tooling to overhaul approval workflows, increasing efficiency by 30%.',
    ],
    stack: ['Go', 'MySQL', 'Kafka'],
  },
  {
    id: 'govtech',
    company: 'GovTech',
    logo: GovTechLogo,
    role: 'Software Engineering Intern',
    period: 'May 2022 — Jul 2022',
    location: 'Singapore',
    highlights: [
      'Improved server query response time by 200× through API restructuring under load.',
      'Added Two-Factor Authentication and reduced page load time by 10% by trimming API calls.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL'],
  },
];
