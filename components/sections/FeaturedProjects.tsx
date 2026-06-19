'use client';

import {motion} from 'framer-motion';
import {projects, type Project} from '@/data/projects';
import {Section} from '@/components/ui/Section';

const ease = [0.16, 1, 0.3, 1] as const;

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="02 — Projects"
      title={
        <>
          Featured <span className="text-primary-muted">projects</span>.
        </>
      }
      description="Things I'm building or maintaining outside of work."
      className="border-t border-border"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({project, index}: {project: Project; index: number}) {
  return (
    <motion.article
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-80px'}}
      transition={{duration: 0.7, delay: index * 0.05, ease}}
      whileHover={{y: -4}}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface/40 transition-colors duration-500 hover:border-white/15 hover:bg-surface/70"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_50%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <ProjectGlyph index={index} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg/90 to-transparent" />
        <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg/40 px-3 py-1 text-xs text-primary-muted backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <div className="space-y-5 p-8">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-primary-muted text-pretty">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-border bg-bg/40 px-3 py-1 text-xs text-primary/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectGlyph({index}: {index: number}) {
  const glyphs = [
    // Trading chart
    <svg
      key="trading"
      viewBox="0 0 320 200"
      className="h-full w-full text-white/90"
      fill="none"
    >
      <path
        d="M10 150 L70 130 L120 100 L170 110 L220 70 L260 80 L310 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 170 L70 160 L120 145 L170 150 L220 130 L260 135 L310 115"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>,
    // Portfolio / bars
    <svg
      key="portfolio"
      viewBox="0 0 320 200"
      className="h-full w-full text-white/90"
      fill="none"
    >
      <rect
        x="40"
        y="120"
        width="32"
        height="60"
        rx="4"
        fill="currentColor"
        opacity="0.7"
      />
      <rect
        x="90"
        y="80"
        width="32"
        height="100"
        rx="4"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="140"
        y="100"
        width="32"
        height="80"
        rx="4"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="190"
        y="50"
        width="32"
        height="130"
        rx="4"
        fill="currentColor"
        opacity="0.9"
      />
      <rect
        x="240"
        y="90"
        width="32"
        height="90"
        rx="4"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>,
    // Server / nodes
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
    </svg>,
    // Widget grid
    <svg
      key="widgets"
      viewBox="0 0 320 200"
      className="h-full w-full text-white/90"
      fill="none"
    >
      <rect
        x="40"
        y="30"
        width="110"
        height="60"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="170"
        y="30"
        width="110"
        height="60"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="40"
        y="110"
        width="110"
        height="60"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="170"
        y="110"
        width="110"
        height="60"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M55 60 L95 60 M55 70 L120 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M185 60 L225 60 M185 70 L250 70"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>,
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-10">
      {glyphs[index % glyphs.length]}
    </div>
  );
}
