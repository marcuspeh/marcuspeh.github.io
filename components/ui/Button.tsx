'use client';

import {motion} from 'framer-motion';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50';

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-14 px-8 text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-bg hover:bg-primary/90 shadow-[0_1px_0_0_rgb(var(--primary-rgb)/0.05)_inset,0_8px_24px_-8px_rgb(var(--primary-rgb)/0.2)]',
  secondary:
    'border border-border bg-surface/60 text-primary backdrop-blur-md hover:bg-surface-hover hover:border-primary/20',
  ghost: 'text-primary-muted hover:text-primary',
};

const motionProps = {
  whileHover: {y: -1},
  whileTap: {scale: 0.98},
  transition: {duration: 0.2, ease: [0.16, 1, 0.3, 1] as const},
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> & {href?: undefined};

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'ref'> & {href: string};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    href,
    ...rest
  } = props;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const anchorProps = rest as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      'href' | 'ref'
    >;
    const external = anchorProps.target === '_blank';
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={anchorProps.target}
        rel={anchorProps.rel ?? (external ? 'noopener noreferrer' : undefined)}
        className={classes}
        {...motionProps}
        onClick={anchorProps.onClick}
        onMouseEnter={anchorProps.onMouseEnter}
        onMouseLeave={anchorProps.onMouseLeave}
      >
        {children}
        <Arrow variant={variant} />
      </motion.a>
    );
  }

  const buttonProps = rest as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'ref'
  >;
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...motionProps}
      type={buttonProps.type ?? 'button'}
      onClick={buttonProps.onClick}
      onMouseEnter={buttonProps.onMouseEnter}
      onMouseLeave={buttonProps.onMouseLeave}
      disabled={buttonProps.disabled}
      aria-label={buttonProps['aria-label']}
    >
      {children}
    </motion.button>
  );
});

function Arrow({variant}: {variant: Variant}) {
  if (variant === 'ghost') return null;
  return (
    <span
      aria-hidden
      className="inline-flex translate-x-0 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
