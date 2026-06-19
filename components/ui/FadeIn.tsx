'use client';

import {motion, type Variants} from 'framer-motion';
import {type ReactNode} from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  once?: boolean;
}

const offsets: Record<Direction, {x: number; y: number}> = {
  up: {x: 0, y: 24},
  down: {x: 0, y: -24},
  left: {x: 24, y: 0},
  right: {x: -24, y: 0},
  none: {x: 0, y: 0},
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance,
  className,
  once = true,
}: FadeInProps) {
  const base = offsets[direction];
  const scale = distance && distance > 0 ? distance / 24 : 1;
  const x = base.x * scale;
  const y = base.y * scale;

  const variants: Variants = {
    hidden: {opacity: 0, x, y},
    visible: {opacity: 1, x: 0, y: 0},
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{once, margin: '-80px'}}
      transition={{duration, delay, ease: [0.16, 1, 0.3, 1]}}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.08,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: '-80px'}}
      transition={{
        staggerChildren,
        delayChildren,
      }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {opacity: 0, y: 20},
        visible: {
          opacity: 1,
          y: 0,
          transition: {duration: 0.6, ease: [0.16, 1, 0.3, 1]},
        },
      }}
    >
      {children}
    </motion.div>
  );
}
