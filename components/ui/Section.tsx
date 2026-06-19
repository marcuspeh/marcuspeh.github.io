import {type ReactNode} from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 md:px-10 md:py-36 ${className ?? ''}`}
    >
      <div
        className={`mx-auto w-full max-w-content ${containerClassName ?? ''}`}
      >
        {(eyebrow || title || description) && (
          <header className="mb-16 md:mb-24">
            {eyebrow && (
              <p className="mb-6 text-eyebrow uppercase text-primary-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-section-mobile md:text-section font-semibold tracking-tight text-balance">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 max-w-prose text-lg text-primary-muted text-pretty">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
