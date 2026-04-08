'use client';

import * as React from 'react';

type Props = {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const styleMap = {
  primary: 'bg-brand text-white hover:bg-green-700',
  secondary: 'bg-white text-gray-700 hover:bg-gray-100 ring-1 ring-gray-300',
};

/**
 * MagneticButton — efecto magnético usando CSS transforms puros.
 * No requiere Framer Motion en el bundle crítico.
 * El cálculo de posición se hace con pointermove + requestAnimationFrame
 * para no bloquear el main thread.
 */
export function MagneticButton({
  href,
  target,
  rel,
  children,
  className,
  variant = 'primary',
}: Props) {
  const ref = React.useRef<HTMLElement>(null);
  const rafId = React.useRef<number>(0);
  const position = React.useRef({ x: 0, y: 0 });
  const [pressed, setPressed] = React.useState(false);

  const applyTransform = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { x, y } = position.current;
    el.style.transform = `translate(${x}px, ${y}px) scale(${pressed ? 0.98 : 1})`;
  }, [pressed]);

  const handlePointerMove = (e: React.PointerEvent) => {
    // En touch el efecto magnético no se percibe y solo consume CPU — ignorar
    if (e.pointerType === 'touch') return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.12;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.12;
    position.current = { x: dx, y: dy };

    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(applyTransform);
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;

    position.current = { x: 0, y: 0 };
    const el = ref.current;
    if (el) {
      el.style.transition = 'transform 0.35s cubic-bezier(0.22,1,0.36,1), background-color 0.15s ease';
      el.style.transform = 'translate(0px, 0px) scale(1)';
      setTimeout(() => {
        if (el) el.style.transition = '';
      }, 380);
    }
  };

  const sharedProps = {
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    className: [base, styleMap[variant], className].filter(Boolean).join(' '),
    style: { willChange: 'transform' } as React.CSSProperties,
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...sharedProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      {...sharedProps}
    >
      {children}
    </button>
  );
}
