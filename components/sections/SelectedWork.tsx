'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {experience, type ExperienceItem} from '@/data/experience';
import {FadeIn} from '@/components/ui/FadeIn';
import {Section} from '@/components/ui/Section';

const ease = [0.16, 1, 0.3, 1] as const;

export function SelectedWork() {
  return (
    <Section
      id="work"
      eyebrow="01 — Experience"
      title={
        <>
          Selected <span className="text-primary-muted">work</span>.
        </>
      }
      description="A focused look at roles where I shipped systems at scale."
    >
      <ol className="relative space-y-16 md:space-y-24">
        {/* vertical accent line */}
        <span
          aria-hidden
          className="absolute bottom-6 left-[15px] top-6 hidden w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:block"
        />
        {experience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </ol>
    </Section>
  );
}

function TimelineItem({item, index}: {item: ExperienceItem; index: number}) {
  const isLeft = index % 2 === 0;

  return (
    <FadeIn direction="up" duration={0.7}>
      <li className="relative grid grid-cols-[32px_1fr] items-start gap-4 md:grid-cols-2 md:gap-12">
        {/* Dot */}
        <span
          aria-hidden
          className="absolute left-[10px] top-3 hidden h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(59,130,246,0.15)] md:absolute md:left-1/2 md:top-6 md:block md:-translate-x-1/2"
        />

        <div
          className={`hidden md:block ${
            isLeft ? 'md:order-1 md:text-right' : 'md:order-2'
          }`}
        >
          {isLeft ? (
            <RoleCard item={item} align="right" />
          ) : (
            <StackCard stack={item.stack} />
          )}
        </div>

        <div className={`pl-2 md:pl-0 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
          {isLeft ? (
            <StackCard stack={item.stack} />
          ) : (
            <RoleCard item={item} align="left" />
          )}

          {/* Mobile inline meta */}
          <div className="mt-6 flex items-center gap-3 md:hidden">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <p className="text-sm text-primary-muted">{item.period}</p>
          </div>
        </div>
      </li>
    </FadeIn>
  );
}

function RoleCard({
  item,
  align,
}: {
  item: ExperienceItem;
  align: 'left' | 'right';
}) {
  return (
    <motion.div
      whileHover={{y: -2}}
      transition={{duration: 0.3, ease}}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/15 hover:bg-surface/70 ${
        align === 'right' ? 'md:ml-auto md:text-right' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg/60">
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            width={20}
            height={20}
            className="opacity-90"
          />
        </div>
        <p className="text-sm font-medium text-primary-muted">
          {item.period} · {item.location}
        </p>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
        {item.role}
      </h3>
      <p className="mt-1 text-base text-primary-muted">@ {item.company}</p>

      <ul className="mt-6 space-y-3">
        {item.highlights.map((line, i) => (
          <li
            key={i}
            className="flex gap-3 text-[15px] leading-relaxed text-primary/90"
          >
            <span
              aria-hidden
              className="mt-2 h-1 w-1 flex-none rounded-full bg-primary-muted"
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function StackCard({stack}: {stack: string[]}) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border/60 p-8">
      <p className="text-eyebrow uppercase text-primary-muted">Stack</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map(tech => (
          <li
            key={tech}
            className="rounded-full border border-border bg-bg/40 px-3 py-1 text-sm text-primary/90"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
