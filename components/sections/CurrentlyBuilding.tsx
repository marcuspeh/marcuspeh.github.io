'use client';

import {motion} from 'framer-motion';
import {buildingItems} from '@/data/socials';
import {FadeIn} from '@/components/ui/FadeIn';

const ease = [0.16, 1, 0.3, 1] as const;

const statusFor = (i: number) => {
  const statuses = ['In progress', 'Exploring', 'Building', 'Studying'];
  return statuses[i % statuses.length];
};

export function CurrentlyBuilding() {
  return (
    <section
      id="building"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <p className="text-eyebrow uppercase text-primary-muted">
            03— Currently
          </p>
          <h2 className="mt-6 max-w-3xl text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            Where my <span className="text-primary-muted">attention</span> is.
          </h2>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-primary-muted text-pretty md:text-xl">
            Research and infra work happening alongside production systems.
          </p>
        </FadeIn>

        <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-surface/30">
          {buildingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.5, delay: i * 0.05, ease}}
              className={`group relative grid grid-cols-[60px_1fr_auto] items-center gap-6 px-6 py-7 transition-colors duration-300 hover:bg-surface/60 md:grid-cols-[80px_1.6fr_1fr_auto] md:gap-10 md:px-10 md:py-9 ${
                i < buildingItems.length - 1 ? 'border-b border-border/60' : ''
              }`}
            >
              <span className="font-mono text-sm text-primary-muted">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-muted">
                  {item.detail}
                </p>
              </div>

              <span className="hidden text-sm text-primary-muted md:block">
                {item.detail.split('.')[0]}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {statusFor(i)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
