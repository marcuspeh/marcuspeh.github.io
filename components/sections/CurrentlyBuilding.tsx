'use client';

import {motion} from 'framer-motion';
import {buildingItems} from '@/data/socials';
import {FadeIn} from '@/components/ui/FadeIn';
import {Section} from '@/components/ui/Section';

const ease = [0.16, 1, 0.3, 1] as const;

export function CurrentlyBuilding() {
  return (
    <Section
      id="building"
      eyebrow="03 — Currently"
      title={
        <>
          Currently <span className="text-primary-muted">building</span>.
        </>
      }
      description="Side projects, research, and systems I'm investing time into right now."
      className="border-t border-border"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 md:p-12">
        {/* glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />

        <div className="relative grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {buildingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.5, delay: i * 0.06, ease}}
              className="group relative bg-bg/40 p-8 transition-colors duration-300 hover:bg-surface/80"
            >
              <FadeIn direction="none" duration={0.4} delay={i * 0.05}>
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-medium text-primary-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-primary-muted">
                  {item.detail}
                </p>
              </FadeIn>
              <span
                aria-hidden
                className="absolute right-6 top-6 text-2xl text-primary-muted/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
