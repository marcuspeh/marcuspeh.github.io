import {FadeIn} from '@/components/ui/FadeIn';
import {Section} from '@/components/ui/Section';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="04 — About"
      title={
        <>
          A bit <span className="text-primary-muted">about</span> me.
        </>
      }
      className="border-t border-border"
    >
      <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
        <FadeIn direction="up">
          <dl className="space-y-8">
            <div>
              <dt className="text-eyebrow uppercase text-primary-muted">
                Based in
              </dt>
              <dd className="mt-2 text-lg">Singapore</dd>
            </div>
            <div>
              <dt className="text-eyebrow uppercase text-primary-muted">
                Focus
              </dt>
              <dd className="mt-2 text-lg">Backend systems · Quant infra</dd>
            </div>
            <div>
              <dt className="text-eyebrow uppercase text-primary-muted">
                Studying
              </dt>
              <dd className="mt-2 text-lg">
                OMSCS, Georgia Tech
                <span className="block text-sm text-primary-muted">
                  Machine Learning
                </span>
              </dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-6 text-lg leading-relaxed text-primary/90 md:text-xl">
            <p>
              I&apos;m a backend engineer at{' '}
              <span className="text-primary">TikTok</span> and a Computer
              Science graduate from NUS. I enjoy building scalable systems and
              exploring quantitative finance.
            </p>
            <p className="text-primary-muted">
              Outside work, I spend time developing trading infrastructure,
              running self-hosted services, and studying machine learning.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
