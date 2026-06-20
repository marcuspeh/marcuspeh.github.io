'use client';

import {motion} from 'framer-motion';
import {socials} from '@/data/socials';
import {FadeIn} from '@/components/ui/FadeIn';

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <p className="text-eyebrow uppercase text-primary-muted">
            05 — Get in touch
          </p>
          <h2 className="mt-6 max-w-4xl text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            Open to senior backend roles and{' '}
            <span className="text-primary-muted">systems conversations</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 max-w-prose text-lg leading-relaxed text-primary-muted md:text-xl">
            Especially interested in real-time infrastructure, decisioning
            platforms, and distributed-systems teams.
          </p>
        </FadeIn>

        <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-surface/30">
          {socials.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.5, delay: i * 0.05, ease}}
              className={`group flex items-center justify-between px-6 py-7 transition-colors duration-300 hover:bg-surface/70 md:px-10 md:py-9 ${
                i < socials.length - 1 ? 'border-b border-border/60' : ''
              }`}
            >
              <div className="flex items-center gap-6">
                <span className="hidden font-mono text-sm text-primary-muted md:block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl font-medium tracking-tight md:text-3xl">
                  {link.label}
                </span>
              </div>
              <span
                aria-hidden
                className="text-2xl text-primary-muted/40 transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent"
              >
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
