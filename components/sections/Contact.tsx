'use client';

import {motion} from 'framer-motion';
import {socials} from '@/data/socials';
import {FadeIn} from '@/components/ui/FadeIn';

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border px-6 py-32 md:px-10 md:py-44"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-content">
        <FadeIn direction="up">
          <p className="text-eyebrow uppercase text-primary-muted">
            05 — Get in touch
          </p>
          <h2 className="mt-6 max-w-3xl text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            Let&apos;s build something{' '}
            <span className="text-primary-muted">worth shipping</span>.
          </h2>
          <p className="mt-6 max-w-prose text-lg text-primary-muted text-pretty">
            Open to interesting systems work, trading infrastructure, and
            conversations about scaling data platforms.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {socials.map((link, i) => (
            <ContactButton key={link.id} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactButton({
  link,
  index,
}: {
  link: {id: string; label: string; href: string; external?: boolean};
  index: number;
}) {
  return (
    <motion.a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-60px'}}
      transition={{duration: 0.6, delay: index * 0.06, ease}}
      whileHover={{y: -2}}
      className="group flex items-center justify-between rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:border-white/20 hover:bg-surface/80 md:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/60 text-primary-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
          <ArrowIcon />
        </span>
        <span className="text-xl font-medium tracking-tight md:text-2xl">
          {link.label}
        </span>
      </div>
      <span
        aria-hidden
        className="text-2xl text-primary-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
      >
        →
      </span>
    </motion.a>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
