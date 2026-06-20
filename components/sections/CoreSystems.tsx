'use client';

import {motion} from 'framer-motion';
import {
  coreSystems,
  systemNarrative,
  systemMetrics,
  type CoreSystem,
} from '@/data/systems';
import {FadeIn} from '@/components/ui/FadeIn';
import {Metrics} from '@/components/ui/Metrics';

const ease = [0.16, 1, 0.3, 1] as const;

export function CoreSystems() {
  return (
    <section
      id="systems"
      className="relative isolate overflow-hidden border-t border-border px-6 py-28 md:px-10 md:py-44"
    >
      {/* Ambient glow + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-content">
        {/* Section header */}
        <FadeIn>
          <p className="text-eyebrow uppercase text-primary-muted">
            {systemNarrative.eyebrow}
          </p>
          <h2 className="mt-6 max-w-4xl text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            {systemNarrative.title}
          </h2>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-primary-muted text-pretty md:text-xl">
            {systemNarrative.description}
          </p>
        </FadeIn>

        {/* Metrics */}
        <FadeIn delay={0.1}>
          <div className="mt-20">
            <Metrics items={systemMetrics} eyebrow="By the numbers" />
          </div>
        </FadeIn>

        {/* Case studies */}
        <div className="mt-28 space-y-12 md:space-y-16">
          {coreSystems.map((system, i) => (
            <SystemCaseStudy key={system.id} system={system} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemCaseStudy({system, index}: {system: CoreSystem; index: number}) {
  return (
    <motion.article
      initial={{opacity: 0, y: 32}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-80px'}}
      transition={{duration: 0.8, delay: index * 0.1, ease}}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface/30 transition-colors duration-500 hover:border-white/15"
    >
      {/* Top meta bar */}
      <div className="flex items-center justify-between border-b border-border/60 px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-[11px] font-semibold text-accent">
            {system.index}
          </span>
          <span className="text-eyebrow uppercase text-primary-muted">
            {system.category}
          </span>
        </div>
        <span className="flex items-center gap-2 text-xs text-primary-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          In production
        </span>
      </div>

      {/* Header */}
      <div className="px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <h3 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {system.name}
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-primary-muted md:text-xl">
          {system.tagline}
        </p>
      </div>

      {/* Problem / Approach / Outcome */}
      <div className="grid gap-px border-t border-border/60 bg-border/60 md:grid-cols-3">
        <NarrativeBlock label="Problem" body={system.problem} />
        <NarrativeBlock label="Approach" body={system.approach} />
        <NarrativeBlock label="Outcome" body={system.outcome} />
      </div>

      {/* Architecture + capabilities row */}
      <div className="grid gap-10 border-t border-border/60 px-6 py-12 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:py-16">
        {/* Capabilities */}
        <div>
          <p className="text-eyebrow uppercase text-primary-muted">
            What it does
          </p>
          <ul className="mt-6 space-y-4">
            {system.capabilities.map((cap, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-relaxed text-primary/90"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-accent"
                />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture flow */}
        <div>
          <p className="text-eyebrow uppercase text-primary-muted">
            Architecture
          </p>
          <div className="mt-6 space-y-3">
            {system.architecture.map((node, i) => (
              <div
                key={i}
                className="grid grid-cols-[40px_1fr] items-start gap-4 rounded-xl border border-border/60 bg-bg/40 p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="text-sm font-medium tracking-tight">
                    {node.label}
                  </p>
                  <p className="mt-1 text-sm text-primary-muted">
                    {node.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proof footer */}
      <div className="grid grid-cols-1 divide-y divide-border/60 border-t border-border/60 bg-bg/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {system.proof.map(p => (
          <div key={p.label} className="px-6 py-8 md:px-10 md:py-10">
            <p className="text-eyebrow uppercase text-primary-muted">
              {p.label}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {p.value}
            </p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function NarrativeBlock({label, body}: {label: string; body: string}) {
  return (
    <div className="bg-surface/40 px-6 py-10 md:px-10 md:py-12">
      <p className="text-eyebrow uppercase text-primary-muted">{label}</p>
      <p className="mt-5 text-[15px] leading-relaxed text-primary/90 md:text-base">
        {body}
      </p>
    </div>
  );
}
