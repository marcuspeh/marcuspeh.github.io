'use client';

import {motion} from 'framer-motion';
import {projects, type Project} from '@/data/projects';
import {FadeIn} from '@/components/ui/FadeIn';

const ease = [0.16, 1, 0.3, 1] as const;

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <p className="text-eyebrow uppercase text-primary-muted">
            02 — Side projects
          </p>
          <h2 className="mt-6 max-w-3xl text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            Projects{' '}
            <span className="text-primary-muted">on the side</span>.
          </h2>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-primary-muted text-pretty md:text-xl">
            Things I&apos;ve built or actively maintain outside of work
          </p>
        </FadeIn>

        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-border bg-border/60 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectColumn
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectColumn({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 16}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-60px'}}
      transition={{duration: 0.7, delay: index * 0.08, ease}}
      className="group relative flex flex-col bg-surface/40 p-8 transition-colors duration-500 hover:bg-surface/80 md:p-10"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-eyebrow uppercase text-primary-muted">
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </p>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl text-balance">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Visual glyph */}
      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-bg/40">
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]"
        />
        <ProjectGlyph index={index} />
      </div>

      {/* Body */}
      <p className="mt-8 text-[15px] leading-relaxed text-primary/90">
        {project.description}
      </p>
      <p className="mt-4 text-[13px] leading-relaxed text-primary-muted">
        {project.detail}
      </p>

      {/* Stack */}
      <div className="mt-8 flex flex-wrap gap-1.5">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="rounded-full border border-border bg-bg/40 px-2.5 py-0.5 text-[11px] text-primary-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 self-start text-[12px] font-medium text-primary-muted transition-colors hover:text-accent"
        >
          View on GitHub
          <span aria-hidden>↗</span>
        </a>
      ) : null}
    </motion.div>
  );
}

function ProjectGlyph({index}: {index: number}) {
  const glyphs = [
    // Home lab — server stack
    <svg
      key="server"
      viewBox="0 0 320 200"
      className="h-full w-full text-white/90"
      fill="none"
    >
      <rect
        x="60"
        y="40"
        width="200"
        height="36"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="60"
        y="86"
        width="200"
        height="36"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="60"
        y="132"
        width="200"
        height="36"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="80" cy="58" r="3" fill="currentColor" />
      <circle cx="80" cy="104" r="3" fill="currentColor" />
      <circle cx="80" cy="150" r="3" fill="currentColor" />
      <path
        d="M100 58h140M100 104h140M100 150h140"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
    </svg>,
    // Spending tracker — chat bubble + receipt
    <svg
      key="spending"
      viewBox="0 0 320 200"
      className="h-full w-full text-white/90"
      fill="none"
    >
      <path
        d="M70 50 H230 a20 20 0 0 1 20 20 V130 a20 20 0 0 1 -20 20 H130 L100 175 V150 H70 a20 20 0 0 1 -20 -20 V70 a20 20 0 0 1 20 -20 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M80 80 H220 M80 100 H200 M80 120 H170"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="230" cy="60" r="14" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M225 60 h10 M230 55 v10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>,
    // Trading algo — candlestick chart
    <svg
      key="trading"
      viewBox="0 0 320 200"
      className="h-full w-full text-white/90"
      fill="none"
    >
      <path
        d="M50 160 H280"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      <line x1="80" y1="60" x2="80" y2="160" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="74" y="90" width="12" height="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="120" y1="40" x2="120" y2="160" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="114" y="70" width="12" height="60" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <line x1="160" y1="55" x2="160" y2="160" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="154" y="85" width="12" height="35" stroke="currentColor" strokeWidth="1.5" />
      <line x1="200" y1="35" x2="200" y2="160" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="194" y="65" width="12" height="60" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
      <line x1="240" y1="50" x2="240" y2="160" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <rect x="234" y="80" width="12" height="45" stroke="currentColor" strokeWidth="1.5" />
    </svg>,
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10">
      {glyphs[index % glyphs.length]}
    </div>
  );
}