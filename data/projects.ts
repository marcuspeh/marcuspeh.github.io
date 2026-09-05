export interface Project {
  id: string;
  title: string;
  description: string;
  detail: string;
  stack: string[];
  link?: string;
  accent: string;
  visual: 'data' | 'trading';
}

export const projects: Project[] = [
  {
    id: 'trading-framework',
    title: 'Trading Algorithm Framework',
    description:
      'Modular Go framework for running the same strategy logic across backtesting and live execution.',
    detail:
      'Reusable components cover market data, order execution, portfolio management, risk controls, scheduling, and historical backtesting.',
    stack: ['Go', 'Backtesting', 'Live execution', 'Risk controls'],
    link: 'https://github.com/marcuspeh/trading_algo_framework',
    accent: 'from-sky-500/25 to-cyan-500/10',
    visual: 'trading',
  },
  {
    id: 'market-data-service',
    title: 'Market Data Service',
    description:
      'Provider-agnostic Python service exposing historical OHLCV and ETF constituent data across 15+ years through REST APIs.',
    detail:
      'Parquet-based caching and scheduled constituent snapshots reduce repeated upstream requests and keep historical backtests reproducible.',
    stack: ['Python', 'FastAPI', 'REST APIs', 'Parquet'],
    link: 'https://github.com/marcuspeh/market-data-service',
    accent: 'from-emerald-500/25 to-teal-500/10',
    visual: 'data',
  },
  {
    id: 'spending-tracker',
    title: 'Spending Tracker (Telegram Bot)',
    description:
      'Telegram bot that polls an email inbox for transaction records and auto-logs each one into a personal expense ledger.',
    detail:
      'A lightweight expense capture flow: transactions are pulled straight from email, so logging happens without another app.',
    stack: ['Python', 'IMAP / Gmail API', 'Telegram Bot API', 'SQL'],
    link: 'https://github.com/marcuspeh/spending_tracker',
    accent: 'from-amber-500/20 to-orange-500/10',
    visual: 'data',
  },
];
