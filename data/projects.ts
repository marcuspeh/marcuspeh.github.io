export interface Project {
  id: string;
  title: string;
  description: string;
  detail: string;
  stack: string[];
  link?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 'home-lab',
    title: 'Home Lab, Docker & Observability',
    description:
      'Self-hosted infrastructure running Docker, Prometheus, Grafana, and an internal service mesh — a sandbox for distributed-systems experimentation.',
    detail:
      'Personal staging environment for validating deployment patterns, failure modes, and observability wiring before applying them at work.',
    stack: ['Ubuntu Server', 'Docker', 'Prometheus', 'Grafana'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'spending-tracker',
    title: 'Spending Tracker (Telegram Bot)',
    description:
      'Telegram bot that polls an email inbox for transaction records and auto-logs each one into a personal expense ledger.',
    detail:
      'Lightest viable surface for expense capture: transactions are pulled straight from email, so logging happens without me opening anything.',
    stack: ['Python', 'IMAP / Gmail API', 'Telegram Bot API', 'SQL'],
    link: 'https://github.com/marcuspeh/spending_tracker',
    accent: 'from-emerald-500/25 to-teal-500/10',
  },
  {
    id: 'trading-algo',
    title: 'Algorithmic Trading & Backtester',
    description:
      'Private algorithmic-trading system I run for myself — research, backtesting, and a live execution path against my own account.',
    detail:
      'Kept off GitHub. Focused on disciplined backtesting, risk controls, and the unglamorous plumbing that makes live execution survivable.',
    stack: ['Go', "Python", 'Backtesting', 'Market data'],
    accent: 'from-sky-500/25 to-cyan-500/10',
  },
];