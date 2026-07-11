import {FadeIn} from '@/components/ui/FadeIn';

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-content">
        <FadeIn>
          <p className="text-eyebrow uppercase text-primary-muted">
            04 — About
          </p>
          <h2 className="mt-6 text-section-mobile font-semibold tracking-tight text-balance md:text-section">
            In <span className="text-primary-muted">short</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-12 max-w-3xl text-2xl font-medium leading-tight tracking-tight text-primary text-balance md:text-4xl md:leading-[1.15]">
            I&apos;m a software engineer at TikTok building distributed systems
            and the operator tooling that runs on top of them.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-primary-muted md:text-xl">
            I enjoy designing scalable infrastructure, working on complex systems
            problems, and maintaining the operator-facing surfaces that sit on
            top. Primarily backend, with frontend components owned as they evolve.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-border pt-10 sm:grid-cols-4">
            <Meta label="Based in" value="Singapore" />
            <Meta label="Focus" value="Distributed systems &amp; tooling" />
            <Meta label="Background" value="NUS · CS" />
            <Meta label="Studying" value="Computer Systems" />
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

function Meta({label, value}: {label: string; value: string}) {
  return (
    <div>
      <dt className="text-eyebrow uppercase text-primary-muted">{label}</dt>
      <dd className="mt-2 text-base font-medium tracking-tight md:text-lg">
        {value}
      </dd>
    </div>
  );
}
