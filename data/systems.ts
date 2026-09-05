export interface ArchitectureNode {
  label: string;
  detail: string;
}

export interface CoreSystem {
  id: string;
  index: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  capabilities: string[];
  proof: {label: string; value: string}[];
  architecture: ArchitectureNode[];
}

export const coreSystems: CoreSystem[] = [
  {
    id: 'query-engine',
    index: 'A',
    name: 'User Segmentation & Decisioning Platform',
    category: 'Production system · TikTok',
    tagline:
      'Distributed rule-tree evaluation over user attributes at production scale.',
    problem:
      'Targeting and eligibility decisions need to be made inline for millions of concurrent requests, but the underlying rule logic is non-trivial — tree-shaped, with each node optionally calling downstream services. Latency budgets are tight, and downstream failures must not cascade.',
    approach:
      'A worker-pool runtime that executes rule trees concurrently with bounded fan-out, per-node timeouts, circuit breakers, and result-stitching primitives. Hot paths are cached at multiple levels; the engine degrades gracefully on partial failures.',
    outcome:
      'A platform that decides eligibility, targeting, and outcome actions for production traffic at scale, with strict latency budgets and stable behavior under downstream stress.',
    capabilities: [
      'Multi-million-QPS query execution',
      'P99 latency and availability optimization',
      'Eligibility, targeting & decision outcomes in-line',
      'Multi-tier caching tuned for hot path access',
    ],
    proof: [
      {label: 'Throughput', value: 'M-QPS'},
      {label: 'Tail latency', value: 'P99 < 50ms'},
      {label: 'Execution', value: 'Distributed'},
      {label: 'Availability', value: '>99.99% SLA'},
    ],
    architecture: [
      {label: 'Query', detail: 'Online requests and cache access'},
      {label: 'Evaluate', detail: 'Rule tree, async fan-out'},
      {label: 'Decide', detail: 'Targeting & eligibility outcomes'},
    ],
  },
  {
    id: 'cohort',
    index: 'B',
    name: 'Distributed User Group Analysis System',
    category: 'Designed & built · TikTok',
    tagline:
      'On-demand creator intelligence, from cohort analysis to visualization.',
    problem:
      'Product teams need to ask questions about very large user populations — segments defined by dynamic, multi-attribute rules — and get answers with low latency. Naive scans are too slow; the system needs to construct distributed query plans that can hit multiple data services concurrently.',
    approach:
      'Designed and built the system end-to-end: a planner that decomposes a segmentation request into a distributed query plan, an executor that runs sub-queries across services in parallel with bounded concurrency, and an aggregator that materializes cohorts. Optimized for large-scale analytics workloads at population scale.',
    outcome:
      'A cohort system that supports flexible, dynamic segmentation with the latency and stability required for use inside product flows.',
    capabilities: [
      'On-demand cohort & user group computation',
      'Distributed query plans across data services',
      'Attribute aggregation at population scale',
      'Dynamic rule-based segmentation',
    ],
    proof: [
      {label: 'Designed', value: 'End-to-end'},
      {label: 'Workload', value: 'Large-scale analytics'},
      {label: 'Scale', value: 'Population-wide'},
    ],
    architecture: [
      {label: 'Plan', detail: 'Distributed query construction'},
      {label: 'Aggregate', detail: 'Cross-service attribute fetch'},
      {label: 'Resolve', detail: 'Cohort & group materialization'},
    ],
  },
];

export const systemNarrative = {
  eyebrow: '01 — Production systems',
  title: 'Two systems. One user intelligence layer.',
  description:
    'At TikTok, I work across query infrastructure and data products where performance, availability, and useful interfaces have to coexist.',
};

export const systemMetrics = [
  {value: 'M-QPS', label: 'Production throughput', hint: 'production traffic'},
  {value: '<50ms', label: 'Tail latency', hint: 'p99 in production'},
  {value: '2', label: 'Owned systems', hint: 'segmentation · decisioning'},
];