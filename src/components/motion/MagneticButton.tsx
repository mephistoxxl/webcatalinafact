import type { HTMLAttributeAnchorTarget, ReactNode } from 'react';

type Props = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  children: ReactNode;
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
 * Enlace estilizado sin JavaScript para mantener las páginas de contenido ligeras.
 */
export function MagneticButton({
  href,
  target,
  rel,
  children,
  className,
  variant = 'primary',
}: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={[base, styleMap[variant], className].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  );
}
