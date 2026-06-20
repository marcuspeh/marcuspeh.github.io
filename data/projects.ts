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
    title: 'Home Lab & Observability',
    description:
      'Self-hosted infrastructure running Docker containers, Prometheus, Grafana, and an internal service mesh — built as a sandbox for distributed-systems experimentation.',
    detail:
      'Used as a personal staging environment to validate deployment patterns, failure modes, and observability wiring before applying them at work.',
    stack: ['Ubuntu Server', 'Docker', 'Prometheus', 'Grafana'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Orchestration',
    description:
      'Agent runtime with bounded execution, tool-routing, and observability primitives — designed for operating production systems with autonomous workflows.',
    detail:
      'Applying lessons from real-time distributed systems to AI agents: explicit timeouts, retry policies, structured outputs, and full traces.',
    stack: ['Python', 'Docker', 'LLMs'],
    accent: 'from-blue-500/30 to-indigo-500/10',
  },
  {
    id: 'widget-framework',
    title: 'Low-code Widget Framework',
    description:
      'Analytics framework that powers scalable, configurable dashboards inside the live operations platform.',
    detail:
      'Built and maintained as part of the production platform; adopted by the majority of internal use cases.',
    stack: ['Java', 'Spring Boot', 'Redis'],
    accent: 'from-violet-500/20 to-fuchsia-500/10',
  },
];
