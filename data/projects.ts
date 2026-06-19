export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 'ai-trading',
    title: 'AI Trading System',
    description:
      'Multi-agent trading platform that ingests Truth Social posts and executes trades automatically against live brokerages.',
    stack: ['Python', 'Docker', 'PostgreSQL', 'LLMs'],
    accent: 'from-blue-500/30 to-indigo-500/10',
  },
  {
    id: 'portfolio-manager',
    title: 'Portfolio Manager',
    description:
      'Factor-based portfolio optimizer and backtesting framework for systematic strategy research.',
    stack: ['Python', 'QuantConnect', 'Pandas'],
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 'home-lab',
    title: 'Home Lab Infrastructure',
    description:
      'Self-hosted Ubuntu server running Docker containers, Prometheus, Grafana, MySQL, and AI agents for observability.',
    stack: ['Ubuntu', 'Docker', 'Prometheus', 'Grafana'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'widget-framework',
    title: 'Widget Framework',
    description:
      'Low-code analytics framework that powers scalable, configurable dashboards for non-technical users.',
    stack: ['Java', 'Spring Boot', 'Redis'],
    accent: 'from-violet-500/20 to-fuchsia-500/10',
  },
];
