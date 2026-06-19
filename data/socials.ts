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
    href: 'https://www.linkedin.com/in/marcus-peh/',
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
    title: 'Multi-agent trading infrastructure',
    detail: 'Designing agent orchestration for live market execution.',
  },
  {
    title: 'Portfolio optimization research',
    detail: 'Factor models, risk decomposition, and backtest pipelines.',
  },
  {
    title: 'Home server & observability stack',
    detail: 'Prometheus, Grafana, and containerized self-hosted services.',
  },
  {
    title: 'OMSCS — Machine Learning',
    detail: 'Studying ML systems, optimization, and applied statistics.',
  },
];
