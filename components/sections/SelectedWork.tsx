'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {experience, type ExperienceItem} from '@/data/experience';
import {FadeIn} from '@/components/ui/FadeIn';

const ease = [0.16, 1, 0.3, 1] as const;

export function SelectedWork() {
  const [current, ...previous] = experience;

  return (
    <section
      id="work"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <p className="text-eyebrow uppercase text-primary-muted">
            01 — Experience
          </p>
          <h2 className="mt-6 max-w-3xl text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            Now, and <span className="text-primary-muted">before</span>.
          </h2>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-primary-muted text-pretty md:text-xl">
            Currently focused on high-scale query infrastructure and data
            products at TikTok. Previously, engineering internships at Google,
            ByteDance, and GovTech.
          </p>
        </FadeIn>

        {/* Current */}
        <FadeIn delay={0.1}>
          <div className="mt-24">
            <p className="text-eyebrow uppercase text-primary-muted">
              Now · Current role
            </p>
            {current && <ExperienceRow item={current} featured />}
          </div>
        </FadeIn>

        {/* Previously */}
        <FadeIn delay={0.15}>
          <div className="mt-24">
            <p className="text-eyebrow uppercase text-primary-muted">
              Before · Engineering internships
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-3">
              {previous.map(item => (
                <ExperienceCompact key={item.id} item={item} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ExperienceRow({
  item,
  featured,
}: {
  item: ExperienceItem;
  featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{y: -2}}
      transition={{duration: 0.3, ease}}
      className={`group relative mt-8 overflow-hidden rounded-3xl border border-border transition-colors duration-500 hover:border-primary/15 ${
        featured ? 'bg-surface/50 p-8 md:p-14' : 'bg-surface/30 p-8 md:p-10'
      }`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-border bg-bg/60">
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={24}
              height={24}
              className="opacity-90"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {item.role}
            </h3>
            <p className="mt-1 text-base text-primary-muted">
              @ {item.company}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <p className="text-sm font-medium text-primary-muted">
            {item.period}
          </p>
          <p className="text-sm text-primary-muted/70">{item.location}</p>
        </div>
      </div>

      {featured && (
        <span
          aria-hidden
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Current
        </span>
      )}

      {item.narrative && (
        <p className="mt-10 max-w-prose text-base leading-relaxed text-primary/90 md:text-lg text-pretty">
          {item.narrative}
        </p>
      )}

      {item.highlights && (
        <ul className="mt-10 space-y-4">
          {item.highlights.map((line, i) => (
            <li
              key={i}
              className="flex gap-3 text-[15px] leading-relaxed text-primary/90 md:text-base"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1 w-1 flex-none rounded-full bg-primary-muted"
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 flex flex-wrap gap-2">
        {item.stack.map(tech => (
          <span
            key={tech}
            className="rounded-full border border-border bg-bg/40 px-3 py-1 text-xs text-primary/90"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ExperienceCompact({item}: {item: ExperienceItem}) {
  return (
    <div className="group relative bg-surface/40 p-8 transition-colors duration-300 hover:bg-surface/70">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg/60">
          <Image
            src={item.logo}
            alt={`${item.company} logo`}
            width={18}
            height={18}
            className="opacity-90"
          />
        </div>
        <p className="text-[13px] font-medium uppercase tracking-wider text-primary-muted">
          {item.company}
        </p>
      </div>

      <h4 className="mt-6 text-lg font-semibold tracking-tight">{item.role}</h4>
      <p className="mt-1 text-sm text-primary-muted">{item.period}</p>

      <p className="mt-5 text-[15px] leading-relaxed text-primary/90">
        {item.highlights?.[0]}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {item.stack.slice(0, 3).map(tech => (
          <span
            key={tech}
            className="rounded-full border border-border bg-bg/40 px-2.5 py-0.5 text-[11px] text-primary-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
