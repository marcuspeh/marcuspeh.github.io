'use client';

import {motion} from 'framer-motion';
import {metrics} from '@/data/socials';
import {Button} from '@/components/ui/Button';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.12, delayChildren: 0.15},
  },
};

const lineVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease}},
};

const metricVariants = {
  hidden: {opacity: 0, y: 16},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease}},
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-32 pt-40 md:px-10 md:pb-44 md:pt-56"
    >
      {/* Background ambient gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <motion.div
        className="mx-auto w-full max-w-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={lineVariants} className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-primary-muted backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to interesting systems work
          </span>
        </motion.div>

        {/* Hero heading */}
        <motion.h1
          variants={lineVariants}
          className="text-hero-mobile md:text-hero font-semibold tracking-tight text-balance text-primary"
        >
          Marcus Peh.
        </motion.h1>

        <motion.p
          variants={lineVariants}
          className="mt-6 max-w-2xl text-2xl font-medium text-primary text-balance md:text-3xl"
        >
          Backend Engineer <span className="text-primary-muted">@</span>{' '}
          <span className="text-primary">TikTok</span>.
        </motion.p>

        <motion.p
          variants={lineVariants}
          className="mt-8 max-w-prose text-body text-primary-muted text-pretty"
        >
          Building scalable data platforms and algorithmic trading systems.
          Previously Google, ByteDance, and GovTech.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={lineVariants}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button href="/Marcus_Peh_Resume.pdf" variant="primary" size="lg">
            Resume
          </Button>
          <Button
            href="https://github.com/marcuspeh"
            variant="secondary"
            size="lg"
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/marcus-peh/"
            variant="ghost"
            size="lg"
          >
            LinkedIn
          </Button>
        </motion.div>

        {/* Metrics row */}
        <motion.dl
          variants={lineVariants}
          className="mt-24 grid grid-cols-2 gap-y-10 border-t border-border pt-12 sm:grid-cols-3 lg:grid-cols-5"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={metricVariants}
              className={`flex flex-col gap-2 ${
                i === metrics.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <dt className="text-eyebrow uppercase text-primary-muted">
                {metric.label}
              </dt>
              <dd className="text-4xl font-semibold tracking-tight md:text-5xl">
                {metric.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
