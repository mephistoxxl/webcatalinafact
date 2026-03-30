'use client';

import * as React from 'react';

type FadeInProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

/**
 * FadeIn — transición CSS pura con opacity + translateY únicamente.
 * ⚠️ Se eliminó filter:blur() de la transición porque en móvil (Android especialmente)
 * tener múltiples elementos con CSS blur simultáneamente destruye el framerate.
 * Ahora las animaciones corren 100% en el compositor de GPU sin tocar el main thread.
 */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respetar preferencia de movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        // Solo transform — nada de filter blur (demasiado caro en móvil)
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        transition: visible
          ? `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s`
          : 'none',
      }}
    >
      {children}
    </div>
  );
}
