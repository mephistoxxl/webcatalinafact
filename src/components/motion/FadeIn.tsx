import type { ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Wrapper estático para evitar observers e hidratación en cada sección de la home.
 */
export function FadeIn({ children, className }: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
