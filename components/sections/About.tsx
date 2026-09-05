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
            I&apos;m a software engineer at TikTok building query
            infrastructure and data products that perform under pressure.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-primary-muted md:text-xl">
            I enjoy working on high-scale systems problems, optimizing critical
            paths, and turning data into products that teams can use to make
            better decisions.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 sm:grid-cols-4 sm:gap-x-8">
            <Meta label="Based in" value="Singapore" />
            <Meta
              label="Focus"
              value="Query infrastructure &amp; data products"
            />
            <Meta label="Education" value="MSc CS · Georgia Tech (ongoing)" />
            <Meta label="Undergrad" value="NUS · Highest Distinction" />
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

function Meta({label, value}: {label: string; value: string}) {
  return (
    <div className="min-w-0">
      <dt className="text-eyebrow uppercase text-primary-muted">{label}</dt>
      <dd className="mt-2 max-w-full break-words text-base font-medium leading-relaxed tracking-tight md:text-lg">
        {value}
      </dd>
    </div>
  );
}
