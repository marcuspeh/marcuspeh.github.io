'use client';

import {motion} from 'framer-motion';
import {Button} from '@/components/ui/Button';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.12, delayChildren: 0.1}},
};

const lineVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0, transition: {duration: 0.9, ease}},
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-40 pt-44 md:px-10 md:pb-56 md:pt-64"
    >
      {/* Background ambient gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <motion.div
        className="mx-auto w-full max-w-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={lineVariants} className="mb-12">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[13px] text-primary-muted backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Designing production systems @ TikTok
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
          Software Engineer{' '}
          <span className="text-primary-muted">@</span>{' '}
          <span className="text-primary">TikTok</span>
          <span className="text-primary-muted"> · Backend &amp; Frontend</span>
          .
        </motion.p>

        <motion.p
          variants={lineVariants}
          className="mt-8 max-w-prose text-body text-primary-muted text-pretty"
        >
          Building distributed systems and maintaining the operator surfaces on
          top. Side projects include a Telegram spending bot and a personal
          trading algorithm. Previously Google, ByteDance, and GovTech.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={lineVariants}
          className="mt-12 flex flex-wrap items-center gap-3"
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
            href="https://www.linkedin.com/in/marcuspeh/"
            variant="ghost"
            size="lg"
          >
            LinkedIn
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
