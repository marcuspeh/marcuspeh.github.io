'use client';

import {motion} from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export interface MetricItem {
  value: string;
  label: string;
  hint?: string;
}

interface MetricsProps {
  items: MetricItem[];
  eyebrow?: string;
  align?: 'start' | 'center';
}

export function Metrics({items, eyebrow, align = 'start'}: MetricsProps) {
  return (
    <div
      className={`flex flex-col ${align === 'center' ? 'items-center' : ''}`}
    >
      {eyebrow && (
        <p className="mb-10 text-eyebrow uppercase text-primary-muted">
          {eyebrow}
        </p>
      )}
      <dl
        className={`grid w-full grid-cols-1 gap-y-10 border-y border-border sm:grid-cols-3 ${
          items.length === 3 ? '' : 'md:grid-cols-' + items.length
        }`}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.7, delay: i * 0.08, ease}}
            className={`flex flex-col gap-3 py-10 sm:py-12 ${
              i < items.length - 1 ? 'sm:border-r sm:border-border' : ''
            } ${i > 0 ? 'sm:pl-10 md:pl-12' : ''}`}
          >
            <dt className="text-eyebrow uppercase text-primary-muted">
              {item.label}
            </dt>
            <dd className="flex items-baseline gap-3">
              <span className="text-5xl font-semibold tracking-tight md:text-6xl">
                {item.value}
              </span>
              {item.hint && (
                <span className="text-sm text-primary-muted">{item.hint}</span>
              )}
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}
