export interface SocialLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export const socials: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hkmpeh@gmail.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/marcuspeh',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcuspeh/',
    external: true,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '/Marcus_Peh_Resume.pdf',
    external: true,
  },
];

export const navLinks = [
  {id: 'work', label: 'Work', href: '#work'},
  {id: 'projects', label: 'Projects', href: '#projects'},
  {id: 'building', label: 'Building', href: '#building'},
  {id: 'about', label: 'About', href: '#about'},
  {id: 'contact', label: 'Contact', href: '#contact'},
];

export const metrics = [
  {value: '2+', label: 'years experience'},
  {value: '4', label: 'internships'},
  {value: '70%', label: 'widget adoption'},
  {value: '200×', label: 'performance gain'},
  {value: '10M+', label: 'users impacted'},
];

export const buildingItems = [
  {
    title: 'Trading algorithm framework',
    detail:
      'A modular Go framework for backtesting, live execution, and risk controls.',
  },
  {
    title: 'Market data service',
    detail:
      'Provider-agnostic historical OHLCV and ETF constituent data over REST APIs.',
  },
  {
    title: 'Spending tracker (Telegram bot)',
    detail:
      'Polls an email inbox for transaction records and auto-logs them to a personal expense ledger.',
  },
  {
    title: 'MSc Computer Science',
    detail: 'Studying at Georgia Tech while continuing to build at TikTok.',
  },
];
