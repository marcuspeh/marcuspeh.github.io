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
    role: 'Backend Software Engineer',
    period: 'Apr 2024 — Present',
    location: 'Singapore',
    narrative:
      "Owning production systems on TikTok's real-time user intelligence platform — a distributed rule evaluation engine and a designed-from-scratch user group analysis system. Responsible for end-to-end reliability: rule-tree execution semantics, async fan-out across downstream services, latency budgets, and observability across millions of QPS with P99 under 50ms. Shipped incrementally through a continuously monitored, fault-tolerant rollout pipeline.",
    stack: ['Go', 'Python', 'MySQL', 'Redis', 'ClickHouse'],
  },
  {
    id: 'google',
    company: 'Google',
    logo: GoogleLogo,
    role: 'Software Engineering Intern · Google Pay',
    period: 'May 2023 — Aug 2023',
    location: 'Singapore',
    highlights: [
      'Cut QR code loading by 93.5% (1.38s → 0.09s) by removing redundant RPC calls on the hot path.',
      'Improved Bluetooth proximity accuracy from 2km to 10m using BLE signal processing.',
    ],
    stack: ['Java', 'Protocol Buffers', 'gRPC'],
  },
  {
    id: 'bytedance',
    company: 'ByteDance',
    logo: ByteDanceLogo,
    role: 'Software Engineering Intern · Global Payments',
    period: 'Aug 2023 — Dec 2023',
    location: 'Singapore',
    highlights: [
      'Improved API performance by 90%+ for a payments channel platform processing $7.5B+ monthly.',
      'Integrated in-house tooling to overhaul approval workflows, increasing efficiency by 30%.',
    ],
    stack: ['Go', 'MongoDB'],
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
      'Added 2FA and reduced page load time by 10% by trimming API calls.',
    ],
    stack: ['TypeScript', 'ReactJS', 'PostgreSQL'],
  },
];
