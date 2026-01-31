  'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type Props = {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export function MagneticButton({
  href,
  target,
  rel,
  children,
  className,
  variant = 'primary',
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-white/90'
      : 'bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15';

  const commonProps = {
    whileTap: { scale: 0.98 },
    whileHover: { scale: 1.02 },
    onPointerMove: (e: React.PointerEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      x.set(dx * 0.12);
      y.set(dy * 0.12);
    },
    onPointerLeave: () => {
      x.set(0);
      y.set(0);
    },
    style: { x: sx, y: sy },
    className: [base, styles, className].filter(Boolean).join(' '),
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...commonProps}>
      {children}
    </motion.button>
  );
}
